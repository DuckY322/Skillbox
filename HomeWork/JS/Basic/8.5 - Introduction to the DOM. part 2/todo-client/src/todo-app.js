myStorage = window.localStorage;

let todosName;
let myTodos = [];

function createAppTitle(title) {
    const appTile = document.createElement(`h2`);
    appTile.innerHTML = title;
    return appTile;
};

function createTodoItemForm() {
    const form = document.createElement(`form`);
    const input = document.createElement(`input`);
    const buttonWrapper = document.createElement(`div`);
    const button = document.createElement(`button`);

    form.classList.add(`input-group`, `mb-3`);
    input.classList.add(`form-control`);
    input.placeholder = `Введите название нового дела`;
    buttonWrapper.classList.add(`input-group-append`);
    button.setAttribute(`disabled`, `disabled`);
    button.classList.add(`btn`, `btn-primary`);
    button.textContent = `Добавить дело`;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
        form,
        input,
        button,
    };
};

function createTodoList() {
    const list = document.createElement(`ul`);
    list.classList.add(`list-group`);
    return list;
};

function createTodoItemElement(todoItemElement) {
    const doneClass = `list-group-item-success`;

    const item = document.createElement(`li`);

    const buttonGroup = document.createElement(`div`);
    const doneButton = document.createElement(`button`);
    const deleteButton = document.createElement(`button`);

    item.classList.add(`list-group-item`, `d-flex`, `justify-content-between`, `align-items-center`);
    item.textContent = todoItemElement.name;
    if (todoItemElement.done) {
        item.classList.toggle(doneClass);
    }

    doneButton.addEventListener(`click`, function () {
        item.classList.toggle(doneClass);

        for (const todo of myTodos) {
            if (todo.name === item.firstChild.textContent) {
                if (item.classList.contains(doneClass)) {
                    todo.done = true;
                } else {
                    todo.done = false;
                }

                myStorage.setItem(todosName, JSON.stringify(myTodos));

                break;
            }
        }
    });

    deleteButton.addEventListener(`click`, function () {
        if (confirm(`Вы уверены?`)) {
            for (const todo in myTodos) {
                if (myTodos[todo].name === item.firstChild.textContent) {
                    myTodos.splice(todo, 1);
                    myStorage.setItem(todosName, JSON.stringify(myTodos));
                    item.remove();
                    break;
                }
            }
        }
    });

    buttonGroup.classList.add(`btn-group`, `btn-group-sm`);
    doneButton.classList.add(`btn`, `btn-success`);
    doneButton.textContent = `Готово`;
    deleteButton.classList.add(`btn`, `btn-danger`);
    deleteButton.textContent = `Удалить`;

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return item;
};

function initialTodosArr(todosName, todosArr) {
    if (todosArr) {
        const tempStorage = JSON.parse(myStorage.getItem(todosName));

        if (tempStorage === null || tempStorage.length === 0 || JSON.stringify(tempStorage) === JSON.stringify(todosArr)) {
            return todosArr;
        } else {
            return tempStorage;
        }
    } else {
        const tempStorage = JSON.parse(myStorage.getItem(todosName));

        if (tempStorage) {
            return tempStorage;
        }
    }
}

function createTodoApp(container, title = `Мои дела`, todos = `myTodos`, todosArr = null) {
    const todoAppTitle = createAppTitle(title);
    const todoItemForm = createTodoItemForm();
    const todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    todosName = todos;
    myTodos = initialTodosArr(todosName, todosArr);

    for (const todo of myTodos) {
        const todoItemElement = createTodoItemElement(todo);
        todoList.append(todoItemElement);
    }

    todoItemForm.form.addEventListener(`submit`, function (e) {
        e.preventDefault();

        if (!todoItemForm.input.value) {
            return;
        }

        let objTodo = { name: todoItemForm.input.value, done: false };

        const todoItemElement = createTodoItemElement(objTodo);

        myTodos.push(objTodo);
        myStorage.setItem(todosName, JSON.stringify(myTodos));

        todoList.append(todoItemElement);
        todoItemForm.input.value = ``;
        disabledFormButton(todoItemForm.input.value, todoItemForm.button);
    });

    todoItemForm.input.oninput = function () {
        disabledFormButton(todoItemForm.input.value, todoItemForm.button);
    }

}

function disabledFormButton(value, button) {
    if (value) {
        button.removeAttribute(`disabled`);
    } else {
        button.setAttribute(`disabled`, `disabled`);
    };
}

window.createTodoApp = createTodoApp;