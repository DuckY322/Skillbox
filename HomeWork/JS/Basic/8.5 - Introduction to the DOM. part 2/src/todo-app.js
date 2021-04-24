myStorage = window.localStorage;

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

function createTodoItem(name, done) {
    const item = document.createElement(`li`);

    const buttonGroup = document.createElement(`div`);
    const doneButton = document.createElement(`button`);
    const deleteButton = document.createElement(`button`);

    item.classList.add(`list-group-item`, `d-flex`, `justify-content-between`, `align-items-center`);
    item.textContent = name;
    if (done) {
        item.classList.toggle(`list-group-item-success`);
    }

    buttonGroup.classList.add(`btn-group`, `btn-group-sm`);
    doneButton.classList.add(`btn`, `btn-success`);
    doneButton.textContent = `Готово`;
    deleteButton.classList.add(`btn`, `btn-danger`);
    deleteButton.textContent = `Удалить`;

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
        item,
        doneButton,
        deleteButton,
    };
};

function initialTodosArr(todos, todosArr) {
    if (todosArr) {
        const tempStorage = JSON.parse(myStorage.getItem(todos));

        if (tempStorage === null || tempStorage.length === 0 || JSON.stringify(tempStorage) === JSON.stringify(todosArr)) {
            return todosArr;
        } else {
            return tempStorage;
        }
    } else {
        const tempStorage = JSON.parse(myStorage.getItem(todos));

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

    myTodos = initialTodosArr(todos, todosArr);

    for (const todo of myTodos) {
        const todoItem = createTodoItem(todo.name, todo.done);
        todoItemButtonEventClick(todoItem, todos);
        todoList.append(todoItem.item);
    }

    todoItemForm.form.addEventListener(`submit`, function (e) {
        e.preventDefault();

        if (!todoItemForm.input.value) {
            return;
        }

        const todoItem = createTodoItem(todoItemForm.input.value, false);

        myTodos.push({ name: todoItemForm.input.value, done: false });
        myStorage.setItem(todos, JSON.stringify(myTodos));
        todoItemButtonEventClick(todoItem, todos);

        todoList.append(todoItem.item);
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

function todoItemButtonEventClick(todoItem, todos) {
    todoItem.doneButton.addEventListener(`click`, function () {
        todoItem.item.classList.toggle(`list-group-item-success`);

        for (const todo of myTodos) {
            if (todo.name === todoItem.item.firstChild.textContent) {
                if (todoItem.item.classList.contains(`list-group-item-success`)) {
                    todo.done = true;
                } else {
                    todo.done = false;
                }

                myStorage.setItem(todos, JSON.stringify(myTodos));

                break;
            }
        }
    });

    todoItem.deleteButton.addEventListener(`click`, function () {
        if (confirm(`Вы уверены?`)) {
            for (const todo in myTodos) {
                if (myTodos[todo].name === todoItem.item.firstChild.textContent) {
                    myTodos.splice(todo, 1);
                    myStorage.setItem(todos, JSON.stringify(myTodos));
                    todoItem.item.remove();
                    break;
                }
            }
        }
    });
}

window.createTodoApp = createTodoApp;