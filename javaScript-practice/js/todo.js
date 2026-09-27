const okButton = document.getElementById("ok-btn");
const inputDate = document.getElementById("date-select");
const inputActivity = document.getElementById("activity-box");
const tableBody = document.querySelector("tbody");

okButton.addEventListener("click", () => {
    if (!inputActivity.value || !inputDate.value) return;

    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = tableBody.rows.length;
    newRow.insertCell(1).textContent = inputActivity.value;
    newRow.insertCell(2).textContent = inputDate.value;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    newRow.insertCell(3).appendChild(removeButton);
    inputActivity.value = "";
    inputDate.value = "";
});

// One listener on the tbody handles clicks on every remove button,
// including buttons in rows added later
tableBody.addEventListener("click", (event) => {
    if (!event.target.classList.contains("remove-btn")) return;

    event.target.closest("tr").remove();
    renumberRows();
});

function renumberRows() {
    for (let i = 0; i < tableBody.rows.length; i++) {
        tableBody.rows[i].cells[0].textContent = i + 1;
    }
}
