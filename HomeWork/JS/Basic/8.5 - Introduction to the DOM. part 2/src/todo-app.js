myStorage = window.localStorage;

let myTodos = [];

function createAppTitle(title) {
    let appTile = document.createElement(`h2`);
    appTile.innerHTML = title;
    return appTile;
};

function createTodoItemForm() {
    let form = document.createElement(`form`);
    let input = document.createElement(`input`);
    let buttonWrapper = document.createElement(`div`);
    let button = document.createElement(`button`);

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
    let list = document.createElement(`ul`);
    list.classList.add(`list-group`);
    return list;
};

function createTodoItem(name, done) {
    let item = document.createElement(`li`);

    let buttonGroup = document.createElement(`div`);
    let doneButton = document.createElement(`button`);
    let deleteButton = document.createElement(`button`);

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

function createTodoApp(container, title = `Список дел`, todosName = `myTodos`) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    let tempStorage = JSON.parse(myStorage.getItem(todosName));
    if (tempStorage) {
        myTodos = tempStorage;
    }

    for (let todo of myTodos) {
        let todoItem = createTodoItem(todo.name, todo.done);
        todoItemButtonEventClick(todoItem, todosName);
        todoList.append(todoItem.item);
    }

    todoItemForm.form.addEventListener(`submit`, function (e) {
        e.preventDefault();

        if (!todoItemForm.input.value) {
            return;
        }

        let todoItem = createTodoItem(todoItemForm.input.value, false);
        todoItemButtonEventClick(todoItem, todosName);

        myTodos.push({ name: todoItemForm.input.value, done: false });
        myStorage.setItem(todosName, JSON.stringify(myTodos));

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

function todoItemButtonEventClick(todoItem, todosName) {
    todoItem.doneButton.addEventListener(`click`, function () {
        todoItem.item.classList.toggle(`list-group-item-success`);

        for (const todo of myTodos) {
            if (todo.name === todoItem.item.firstChild.textContent) {
                if (todoItem.item.classList.contains(`list-group-item-success`)) {
                    todo.done = true;
                } else {
                    todo.done = false;
                }

                myStorage.setItem(todosName, JSON.stringify(myTodos));

                break;
            }
        }
    });

    todoItem.deleteButton.addEventListener(`click`, function () {
        if (confirm(`Вы уверены?`)) {
            for (const todo in myTodos) {
                if (myTodos[todo].name === todoItem.item.firstChild.textContent) {
                    myTodos.splice(todo, 1);
                    myStorage.setItem(todosName, JSON.stringify(myTodos));
                    todoItem.item.remove();
                    break;
                }
            }
        }
    });
}

window.createTodoApp = createTodoApp;