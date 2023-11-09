class TodoListPo {
    todoList = '.todo-list';
    destroyButton = '.destroy';
    todoInputField = '.new-todo';
    todoFilters = '.filters';
    clearCompletedButton = '.clear-completed';

    getTodoList() {
        return cy.get(this.todoList);
    }

    getDestroyButton() {
        return cy.get(this.destroyButton);
    }

    getTodoInputField() {
        return cy.get(this.todoInputField);
    }

    getTodoFilters() {
        return cy.get(this.todoFilters).find('li');
    }

    getClearCompletedButton() {
        return cy.get(this.clearCompletedButton);
    }


}

export default new TodoListPo();
