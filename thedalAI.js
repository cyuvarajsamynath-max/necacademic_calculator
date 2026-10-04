/**
 * ResultSeal — Thedal (தேடல்) AI Study Planner Engine
 * Intelligent conversational assistant for NEC students
 */

class ThedalAI {
  constructor() {
    this.context = null; // Holds student session context (result, dept, semester, etc.)
  }

  /**
   * Set result context from completed calculation
   */
  setContext(studentData) {
    this.context = studentData;
  }

  /**
   * Clear active result context (returns to general Q&A mode)
   */
  clearContext() {
    this.context = null;
  }

  /**
   * Generates initial greeting message based on context
   */
  getGreeting() {
    if (this.context && this.context.studentName) {
      const { studentName, department, semester, cgpa, sgpa } = this.context;
      return `Vanakkam **${studentName}**! I am **Thedal (தேடல்)**, your academic planning assistant at NEC. 

I've loaded your **Semester ${semester} ${department}** report:
- **SGPA:** ${sgpa}
- **CGPA:** ${cgpa}

How can I help you plan your studies today? You can ask me:
1. *"How can I reach 8.5 CGPA next semester?"*
2. *"Which subjects carry the highest credit weight next semester?"*
3. *"What happens if I raise my grade in a 4-credit course?"*
4. *"Am I eligible for core campus placement cutoffs (7.5+ CGPA)?"*`;
    }

    return `Vanakkam! I am **Thedal (தேடல்)**, your AI Academic Assistant at National Engineering College (NEC), K.R. Nagar, Kovilpatti.

Ask me about your R-2023 department curriculum, credit weights, study strategy, or calculate your target CGPA! For personalized projections, you can complete a CGPA calculation first.`;
  }

  /**
   * Main query process engine
   */
  processQuery(queryText) {
    const text = queryText.toLowerCase().trim();

    // Check for CGPA target projections
    if (text.includes("reach") || text.includes("target") || text.includes("need for") || text.includes("cgpa target") || text.includes("get 8.") || text.includes("get 9.")) {
      return this.handleTargetQuery(text);
    }

    // Check for Placement Eligibility
    if (text.includes("placement") || text.includes("eligible") || text.includes("cutoff") || text.includes("7.5") || text.includes("8.0")) {
      return this.handlePlacementQuery(text);
    }

    // Check for Grade Sensitivity / What-if
    if (text.includes("if i get") || text.includes("grade in") || text.includes("change grade") || text.includes("b in") || text.includes("a in")) {
      return this.handleGradeSensitivityQuery(text);
    }

    // Check for High Credit / Priority Subjects
    if (text.includes("priority") || text.includes("focus") || text.includes("credit weight") || text.includes("highest credit") || text.includes("most credit")) {
      return this.handleCreditWeightQuery(text);
    }

    // Check for Next Semester Curriculum Lookup
    if (text.includes("next semester") || text.includes("subjects next") || text.includes("upcoming") || text.includes("future sem")) {
      return this.handleNextSemesterQuery(text);
    }

    // Check for Study Recommendations based on low grades
    if (text.includes("improve") || text.includes("weak") || text.includes("recommendation") || text.includes("tips") || text.includes("study plan")) {
      return this.handleStudyPlanQuery(text);
    }

    // General NEC Curriculum / Academic Q&A
    return this.handleGeneralQuery(text);
  }

  handleTargetQuery(text) {
    if (!this.context || !this.context.result) {
      return `To calculate exact target grades, please complete a CGPA calculation report first! Then I can compute your exact required SGPA using your actual credit history.`;
    }

    const { result, semester, departmentCode } = this.context;
    let target = 8.5; // default target
    const match = text.match(/\b([7-9](\.\d)?|10)\b/);
    if (match) {
      target = parseFloat(match[1]);
    }

    const nextSem = Math.min(8, semester + 1);
    const nextSemData = CURRICULUM_DATA[departmentCode]?.semesters[nextSem];
    const nextSemCredits = nextSemData ? nextSemData.total_credits : 22;

    const projection = calculateRequiredSGPA(result.cgpa, result.cumulativeCredits, target, nextSemCredits);

    if (projection.requiredSGPA > 10.0) {
      return `🎯 **Target CGPA Analysis for ${target} CGPA:**

Your current CGPA is **${result.cgpa}** (${result.cumulativeCredits} credits earned).
To reach a cumulative **${target} CGPA** after Semester ${nextSem} (${nextSemCredits} credits), you would require an SGPA of **${projection.requiredSGPA}** in Semester ${nextSem}.

⚠️ **Note:** Since the maximum achievable SGPA is **10.00** (all 'S' grades), reaching ${target} in a single semester isn't mathematically possible. However, if you maintain an SGPA of **9.5+** across the remaining semesters, your CGPA will steadily climb towards your goal!`;
    }

    if (projection.requiredSGPA <= 0) {
      return `🎯 **Target CGPA Analysis:**

Great news! Your current CGPA is already **${result.cgpa}**, which comfortably exceeds your target of **${target} CGPA**. Maintaining an SGPA above **${target}** in upcoming semesters will keep your distinction intact!`;
    }

    return `🎯 **Target CGPA Projection (${target} CGPA Goal):**

- **Current CGPA:** ${result.cgpa} (${result.cumulativeCredits} credits completed)
- **Target Cumulative CGPA:** ${target}
- **Upcoming Semester ${nextSem} Credits:** ${nextSemCredits}

💡 **Required Semester ${nextSem} SGPA:** **${projection.requiredSGPA}**

**Recommended Grade Breakdown to achieve ${projection.requiredSGPA} SGPA:**
- **4-Credit Core Courses:** Aim for **S** or **A+** (Grade points 10 / 9)
- **3-Credit Theory Courses:** Aim for **A+** or **A** (Grade points 9 / 8)
- **2-Credit Labs:** Secure **S** grades (10 points) to boost your average effortlessly!`;
  }

  handlePlacementQuery(text) {
    if (!this.context || !this.context.result) {
      return `NEC core placement criteria usually require:
- **Tier 1 Tech / R&D Companies:** 8.0+ CGPA with no standing arrears.
- **Core Engineering / Product Companies:** 7.5+ CGPA.
- **Mass / IT Services Companies:** 6.5+ CGPA.

Run your calculation to check your specific eligibility status!`;
    }

    const { result, studentName, department } = this.context;
    const cgpa = result.cgpa;

    let placementStatus = "";
    if (cgpa >= 8.5) {
      placementStatus = `🌟 **Elite Category (8.5+ CGPA):** ${studentName}, your CGPA of **${cgpa}** puts you in the top placement bracket for high-CTC product and R&D roles across ${department}.`;
    } else if (cgpa >= 7.5) {
      placementStatus = `✅ **High Eligibility (7.5+ CGPA):** ${studentName}, your CGPA of **${cgpa}** comfortably qualifies you for over 90% of core and IT placement drives at NEC!`;
    } else if (cgpa >= 6.5) {
      placementStatus = `⚠️ **Standard Eligibility (6.5+ CGPA):** Your CGPA of **${cgpa}** qualifies for general placement drives. Reaching **7.5+ CGPA** will unlock premium core company cutoffs.`;
    } else {
      placementStatus = `💪 **Growth Phase (<6.5 CGPA):** Your CGPA is **${cgpa}**. Focus heavily on high-credit core subjects next semester to elevate your score past the **6.5** and **7.5** placement benchmarks!`;
    }

    return `${placementStatus}

**NEC Placement Guidelines:**
- Maintain 0 active arrears at the time of recruitment.
- Focus on practical lab grades (easy 10 points) and 4-credit heavy math/theory courses.`;
  }

  handleGradeSensitivityQuery(text) {
    if (!this.context || !this.context.result) {
      return `You can test grade sensitivity after running your calculation! I'll calculate exact CGPA shifts for changing grades in 4-credit vs 3-credit subjects.`;
    }

    const { result } = this.context;
    const impact4Credit = calculateSubjectImpact(result, 4, "B", "S");
    const impact3Credit = calculateSubjectImpact(result, 3, "B", "S");

    return `📊 **Grade Sensitivity & CGPA Impact Analysis:**

Upgrading your performance in a subject significantly boosts your overall CGPA:

1. **In a 4-Credit Course (e.g. Mathematics/Core Theory):**
   - Upgrading from **B** (6.5 pts) to **S** (10 pts) increases your cumulative score by **+${impact4Credit.cgpaDifference}** CGPA points! (New CGPA: **${impact4Credit.newCGPA}**)

2. **In a 3-Credit Course:**
   - Upgrading from **B** to **S** increases your cumulative score by **+${impact3Credit.cgpaDifference}** CGPA points! (New CGPA: **${impact3Credit.newCGPA}**)

**Takeaway:** Prioritize 4-credit subjects during your study schedule—they carry **33% more weight** towards your final CGPA!`;
  }

  handleCreditWeightQuery(text) {
    const sem = this.context ? Math.min(8, this.context.semester) : 1;
    const deptCode = this.context ? this.context.departmentCode : "CSE";
    const semData = CURRICULUM_DATA[deptCode]?.semesters[sem];

    if (!semData) return `Curriculum data loaded for NEC Regulation R-2023 across all 7 departments.`;

    const highCreditSubjects = semData.subjects
      .filter(s => s.credits > 0)
      .sort((a, b) => b.credits - a.credits);

    let listStr = highCreditSubjects.map(s => `- **${s.code} - ${s.title}:** ${s.credits} Credits (${s.category})`).join("\n");

    return `⚖️ **Credit Weight Rank for ${deptCode} - Semester ${sem}:**

Total Semester Credits: **${semData.total_credits}**

${listStr}

💡 **Academic Strategy:** The 4-credit courses impact your SGPA almost **twice as much** as 2-credit practicals. Ensure at least 60% of your initial study time is spent mastering 4-credit concepts!`;
  }

  handleNextSemesterQuery(text) {
    if (!this.context) {
      return `NEC R-2023 offers structured 8-semester plans for CSE, ECE, EEE, IT, AI&DS, Civil, and Mechanical Engineering. Complete a calculation to see your upcoming department courses!`;
    }

    const { departmentCode, semester } = this.context;
    const nextSem = Math.min(8, semester + 1);

    if (semester === 8) {
      return `🎉 You are currently in Semester 8—the final semester of your degree! Focus on your Project Work / Dissertation (10 credits) to finish with top honors!`;
    }

    const nextSemData = CURRICULUM_DATA[departmentCode]?.semesters[nextSem];
    if (!nextSemData) return `Next semester curriculum loaded for ${departmentCode}.`;

    let subList = nextSemData.subjects.map(s => `- \`${s.code}\` **${s.title}** (${s.credits} Credits, ${s.category})`).join("\n");

    return `📚 **Upcoming Curriculum: ${departmentCode} — Semester ${nextSem}**

Total Credits: **${nextSemData.total_credits}**

${subList}

Reach out anytime to compute target SGPA strategies for Semester ${nextSem}!`;
  }

  handleStudyPlanQuery(text) {
    if (!this.context || !this.context.subjectEntries) {
      return `📌 **General Study Strategy for NEC Students:**
1. **Focus on 4-credit courses early:** Practice previous year question papers for core analytical subjects.
2. **Maximize Laboratory Grades:** Labs offer an easy path to S grades (10.0 points) with zero exam stress.
3. **Continuous Assessment:** Perform strongly in Internal Tests to lock in high internal marks before end-semester exams.`;
    }

    const { subjectEntries, studentName } = this.context;

    // Identify lower performing subjects
    const lowGrades = subjectEntries.filter(s => s.grade === "C" || s.grade === "C+" || s.grade === "U" || s.grade === "B");
    
    if (lowGrades.length === 0) {
      return `🌟 **Exceptional Performance ${studentName}!** 

You scored high grades across all subjects this semester! 
**Study Plan for Next Semester:**
- Maintain your current study rhythm.
- Help peer study groups (teaching reinforces concepts!).
- Explore competitive coding, NPTEL certification courses, or core industry projects.`;
    }

    let lowList = lowGrades.map(s => `- **${s.title}** (Grade: \`${s.grade}\`, ${s.credits} Credits)`).join("\n");

    return `📝 **Personalized Academic Improvement Plan for ${studentName}:**

Based on your results, here are key subjects to strengthen:
${lowList}

**Recommended Action Steps:**
1. **Targeted Review:** Revisit core fundamental concepts in the courses listed above before next semester begins.
2. **Leverage High-Credit Weights:** Always allocate study blocks proportional to course credit weight.
3. **Faculty Guidance:** Connect with your subject staff or mentor at NEC for specialized clarification on tough topics.`;
  }

  handleGeneralQuery(text) {
    return `I am **Thedal (தேடல்)**, your AI Study Planner for National Engineering College (NEC).

Under NEC Regulation **R-2023 (Absolute Grading System)**:
- **S Grade:** 91–100 marks (10.0 points)
- **A+ Grade:** 81–90 marks (9.0 points)
- **A Grade:** 71–80 marks (8.0 points)
- **B+ Grade:** 66–70 marks (7.0 points)
- **B Grade:** 61–65 marks (6.5 points)
- **C+ Grade:** 56–60 marks (6.0 points)
- **C Grade:** 50–55 marks (5.0 points)
- **U Grade:** Below 50 (0 points, counted in attempted credits)
- **SA / WC:** Excluded from CGPA credit calculation.

Ask me about target CGPAs, semester credit distributions, or placement eligibility anytime! ENDRUM TAMIL!`;
  }
}

// Global instance
const totalThedalAI = new ThedalAI();
