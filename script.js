const GRADE_POINTS = { "O": 10, "A+": 9, "A": 8, "B+": 7, "B": 6, "C": 5, "U": 0 };

const splash = document.getElementById("splash");
const rowsBox = document.getElementById("rows");

// ---------- Splash ----------
splash.addEventListener("click", function () {
  splash.classList.add("slide-up");
  document.body.classList.remove("locked");
});

splash.addEventListener("transitionend", function (event) {
  if (event.target === splash) {
    splash.hidden = true;
  }
});

// ---------- Subject rows ----------
function addRow() {
  const row = document.createElement("div");
  row.className = "row";
  row.innerHTML = `
    <input type="text" class="subject-name" placeholder="Subject name" aria-label="Subject name">
    <select class="credits" aria-label="Credits">
      <option>1</option>
      <option>2</option>
      <option selected>3</option>
      <option>4</option>
    </select>
    <select class="grade" aria-label="Grade">
      <option value="">Grade</option>
      ${Object.keys(GRADE_POINTS).map(g => `<option value="${g}">${g}</option>`).join("")}
    </select>
    <button type="button" class="btn-remove" aria-label="Remove subject">✕</button>
  `;
  rowsBox.appendChild(row);
}

function resetRows() {
  rowsBox.innerHTML = "";
  for (let i = 0; i < 4; i++) addRow();
  calculate();
}

// ---------- GPA calculation (same formula as your Python code) ----------
function calculate() {
  let points = 0;
  let credits = 0;
  let count = 0;

  rowsBox.querySelectorAll(".row").forEach(function (row) {
    const grade = row.querySelector(".grade").value;
    const c = Number(row.querySelector(".credits").value);
    if (grade === "") return;          // skip subjects without a grade
    points += c * GRADE_POINTS[grade];
    credits += c;
    count++;
  });

  const gpaValue = document.getElementById("gpaValue");
  const gpaNote = document.getElementById("gpaNote");

  if (credits === 0) {
    gpaValue.textContent = "–";
    gpaNote.textContent = "Pick a grade for at least one subject.";
  } else {
    gpaValue.textContent = (points / credits).toFixed(2);
    gpaNote.textContent = "Updated as you change grades.";
  }
  document.getElementById("countValue").textContent = count;
  document.getElementById("creditValue").textContent = credits;
}

// ---------- Events ----------
document.getElementById("addRow").addEventListener("click", function () {
  addRow();
  calculate();
});

document.getElementById("resetAll").addEventListener("click", resetRows);

rowsBox.addEventListener("input", calculate);

rowsBox.addEventListener("click", function (event) {
  const removeBtn = event.target.closest(".btn-remove");
  if (!removeBtn) return;
  removeBtn.closest(".row").remove();
  if (rowsBox.children.length === 0) addRow();
  calculate();
});

resetRows();
