/**
 * ResultSeal — Calculation Engine
 * Implements NEC Absolute Grading System (circular dated 28.04.2026 for 2025-2026 onwards)
 */

const GRADE_POINTS = {
  "S": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6.5,
  "C+": 6,
  "C": 5,
  "U": 0
};

const GRADE_DESCRIPTIONS = {
  "S": "Outstanding (91–100)",
  "A+": "Excellent (81–90)",
  "A": "Very Good (71–80)",
  "B+": "Good (66–70)",
  "B": "Above Average (61–65)",
  "C+": "Average (56–60)",
  "C": "Satisfactory (50–55)",
  "U": "Re-appearance (Below 50)"
};

const MOTIVATIONAL_QUOTES = {
  excellent: [
    "Outstanding academic performance! You are operating at the pinnacle of engineering excellence.",
    "Consistent mastery! Your high CGPA reflects true technical dedication.",
    "Exceptional work! You are setting the standard for your department at NEC."
  ],
  good: [
    "Strong academic performance! You are well positioned for core campus placements.",
    "Great work! Maintain this momentum and aim for the 9.0+ threshold.",
    "Solid technical foundation built! A slight push in high-credit courses will elevate your CGPA further."
  ],
  fair: [
    "Steady progress! You have a firm foundation to build upon.",
    "Focus on high-credit subjects next semester to boost your cumulative average significantly.",
    "Every core subject mastered brings you closer to your academic goals. Keep pushing!"
  ],
  low: [
    "Every semester offers a fresh opportunity! Focus on key fundamentals to turn the tide.",
    "Consistency over time creates engineering mastery. Focus on high-credit courses next.",
    "Resilience defines great engineers. Identify weak areas and build a targeted study plan!"
  ]
};

/**
 * Calculates SGPA, CGPA, grade counts, and credit totals for a student session.
 * 
 * @param {Array} subjectEntries - Array of { code, title, credits, grade, specialStatus, isMC, category }
 * @param {number} semester - Current semester (1 to 8)
 * @param {number} prevCGPA - Previous CGPA (if semester > 1)
 * @param {number} prevCredits - Previous total credits earned (if semester > 1)
 */
function calculateResult(subjectEntries, semester = 1, prevCGPA = 0, prevCredits = 0) {
  let currentCreditPoints = 0;
  let currentAttemptedCredits = 0;
  let totalCoursesAttempted = 0;
  
  const gradeDistribution = {
    "S": 0,
    "A+": 0,
    "A": 0,
    "B+": 0,
    "B": 0,
    "C+": 0,
    "C": 0,
    "U": 0,
    "SA": 0,
    "WC": 0
  };

  subjectEntries.forEach(sub => {
    // Exclude Mandatory Courses (MC) with 0 credits
    if (sub.isMC || sub.credits === 0) {
      return;
    }

    // Special status handling: SA (Shortage of Attendance) or WC (Withdrawal of Course)
    if (sub.specialStatus === "SA" || sub.specialStatus === "WC") {
      gradeDistribution[sub.specialStatus]++;
      // Excluded from credit sum and grade point sum
      return;
    }

    const grade = sub.grade || "S";
    gradeDistribution[grade] = (gradeDistribution[grade] || 0) + 1;
    totalCoursesAttempted++;

    const gradePoint = GRADE_POINTS[grade] !== undefined ? GRADE_POINTS[grade] : 0;
    const points = sub.credits * gradePoint;

    currentCreditPoints += points;
    currentAttemptedCredits += sub.credits;
  });

  // Calculate SGPA for current semester
  const sgpa = currentAttemptedCredits > 0 ? (currentCreditPoints / currentAttemptedCredits) : 0;

  // Calculate CGPA
  let cumulativeCGPA = 0;
  let cumulativeCredits = 0;

  if (semester === 1 || prevCredits === 0) {
    cumulativeCGPA = sgpa;
    cumulativeCredits = currentAttemptedCredits;
  } else {
    const previousCreditPoints = prevCGPA * prevCredits;
    cumulativeCredits = prevCredits + currentAttemptedCredits;
    cumulativeCGPA = cumulativeCredits > 0 ? ((previousCreditPoints + currentCreditPoints) / cumulativeCredits) : 0;
  }

  // Format to 2 decimal places
  const sgpaFormatted = parseFloat(sgpa.toFixed(2));
  const cgpaFormatted = parseFloat(cumulativeCGPA.toFixed(2));

  // Determine Performance Tier & Quote
  let tier = "low";
  if (cgpaFormatted >= 9.0) tier = "excellent";
  else if (cgpaFormatted >= 7.5) tier = "good";
  else if (cgpaFormatted >= 6.0) tier = "fair";

  const quotesList = MOTIVATIONAL_QUOTES[tier];
  const quote = quotesList[Math.floor(Math.random() * quotesList.length)];

  return {
    sgpa: sgpaFormatted,
    cgpa: cgpaFormatted,
    currentCreditPoints: parseFloat(currentCreditPoints.toFixed(2)),
    currentAttemptedCredits,
    cumulativeCredits,
    gradeDistribution,
    totalCoursesAttempted,
    performanceTier: tier,
    quote
  };
}

/**
 * Solves required next semester SGPA to achieve a target CGPA.
 */
function calculateRequiredSGPA(currentCGPA, currentTotalCredits, targetCGPA, nextSemCredits) {
  const targetTotalPoints = targetCGPA * (currentTotalCredits + nextSemCredits);
  const currentTotalPoints = currentCGPA * currentTotalCredits;
  const requiredPoints = targetTotalPoints - currentTotalPoints;
  const requiredSGPA = requiredPoints / nextSemCredits;

  return {
    targetCGPA,
    nextSemCredits,
    requiredSGPA: parseFloat(requiredSGPA.toFixed(2)),
    isAchievable: requiredSGPA <= 10.0,
    minGradePointNeeded: requiredSGPA > 0 ? Math.max(0, parseFloat(requiredSGPA.toFixed(2))) : 0
  };
}

/**
 * Calculates grade sensitivity: change in CGPA if a subject grade changes.
 */
function calculateSubjectImpact(currentResult, subjectCredits, originalGrade, newGrade) {
  const origPoints = (GRADE_POINTS[originalGrade] || 0) * subjectCredits;
  const newPoints = (GRADE_POINTS[newGrade] || 0) * subjectCredits;
  const pointDiff = newPoints - origPoints;

  const totalCredits = currentResult.cumulativeCredits;
  const newCGPA = totalCredits > 0 ? ((currentResult.cgpa * totalCredits + pointDiff) / totalCredits) : 0;

  return {
    subjectCredits,
    originalGrade,
    newGrade,
    cgpaDifference: parseFloat((newCGPA - currentResult.cgpa).toFixed(2)),
    newCGPA: parseFloat(newCGPA.toFixed(2))
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GRADE_POINTS,
    GRADE_DESCRIPTIONS,
    MOTIVATIONAL_QUOTES,
    calculateResult,
    calculateRequiredSGPA,
    calculateSubjectImpact
  };
}
