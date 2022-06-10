const form = document.getElementById("form");
const todoInput = document.getElementById("todo-input");
const todosList = document.getElementById("todos");

let todos = [
	{
		id: 1020,
		text: "Ajudar o peixe"
	},
	{
		id: 2058,
		text: "Estudar na escola"
	},
	{
		id: 9405,
		text: "Jogar pipa e soltar bola"
	}
];

function deleteTodo(event) {
	const todoId = Number(event.target.parentElement.dataset.id);
	const newTodosArray = todos.filter((todo) => todo.id !== todoId);

	todos = [...newTodosArray];

	todosList.textContent = "";
	renderTodos();
}

function renderTodos() {
	todos.forEach((todo) => {
		const li = document.createElement("li");
		li.innerText = todo.text;
		li.setAttribute("data-id", todo.id);

		const deleteSpan = document.createElement("span");
		deleteSpan.classList.add("material-symbols-outlined", "icon-delete");
		deleteSpan.innerText = "delete";

		deleteSpan.addEventListener("click", deleteTodo);

		li.appendChild(deleteSpan);
		todosList.appendChild(li);

		todoInput.value = "";
	});
}

function generateTodoId() {
	return Math.floor(Math.random() * 10000);
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const todoContent = todoInput.value;
	const todoId = generateTodoId();

	const newTodo = { id: todoId, text: todoContent };

	const includesNewTodo = todos.find((todo) => todo.text === newTodo.text);

	if (newTodo.text && !includesNewTodo) {
		todos.push(newTodo);
		todosList.textContent = "";
		renderTodos();
	}
});

renderTodos();
