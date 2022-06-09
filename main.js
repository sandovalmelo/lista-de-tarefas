const form = document.getElementById("form");
const todoInput = document.getElementById("todo-input");
const todosList = document.getElementById("todos");

const todos = [
	"Ajudar o peixe",
	"Estudar na escola",
	"Jogar pipa e soltar bola"
];

function deleteTodo(event) {
	const todoTarget = todos.findIndex((todo) => todo === event.target.innerText);
	todos.splice(todoTarget, 1);
	todosList.textContent = "";
	renderTodos();
}

function renderTodos() {
	todos.forEach((todo) => {
		const li = document.createElement("li");
		li.innerText = todo;

		const deleteSpan = document.createElement("span");
		deleteSpan.classList.add("material-symbols-outlined", "icon-delete");
		deleteSpan.innerText = "delete";

		deleteSpan.addEventListener("click", deleteTodo);

		li.appendChild(deleteSpan);
		todosList.appendChild(li);

		todoInput.value = "";
	});
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const todoContent = todoInput.value;

	if (todoContent && !todos.includes(todoContent)) {
		console.log();
		todos.push(todoContent);
		todosList.textContent = "";
		renderTodos();
	}
});

renderTodos();
