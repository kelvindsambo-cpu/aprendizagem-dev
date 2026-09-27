const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const shoppingList = document.getElementById("shopping-list");
const counterDiv = document.querySelector(".counter-row");
let clearAll;

function updateCounter() {
  const count = shoppingList.children.length;
  counterDiv.textContent = `${count} ${count === 1 ? "item" : "items"}`;

  
  if (count && !clearAll) {
    clearAll = document.createElement("button");
    clearAll.className="clear-btn";
    clearAll.textContent = "Clear All"
    document.querySelector("main").append(clearAll);
  } else if (!count && clearAll) {
    clearAll.remove();
    clearAll = null;
  }
}

function addItem() {
  const text = itemInput.value.trim();
  if (!text) return;

  const itemElement = document.createElement("li");
  itemElement.className = "list-item";

  const textElement = document.createElement("span");
  textElement.textContent = text;
  textElement.className = "item-text";

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-btn";

  itemElement.appendChild(textElement);
  itemElement.appendChild(removeButton);
  shoppingList.appendChild(itemElement);

  updateCounter();
  itemInput.value = "";
}

addButton.addEventListener("click", addItem);

itemInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addItem();
});

shoppingList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove-btn")) return;
  event.target.closest("li").remove();
  updateCounter();
});

shoppingList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-btn")) return;
  const item = event.target.closest(".list-item");
  if (!item) return;
  item.querySelector(".item-text").classList.toggle("crossed");
});

document.querySelector("main").addEventListener("click", (event) =>
{
  if (!event.target.classList.contains("clear-btn")) return;

  shoppingList.replaceChildren();
  updateCounter();
})