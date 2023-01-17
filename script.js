const form = document.querySelector("form");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (!input.value) return;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add('removeButton')
    button.textContent = 'Remove';
    li.textContent = input.value;
    li.appendChild(button);
    list.appendChild(li);
    input.value = "";
  
    button.addEventListener("click", () => {
      li.remove();
    });
  });
  
