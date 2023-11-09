import todoList from '../page-object/todo-list.po';


Cypress.Commands.add('createTwoTasks', (task1: any, task2: any) => {
        todoList.getTodoInputField().type(task1).type('{enter}')
        todoList.getTodoList().should('contain.text', task1)
        todoList.getTodoInputField().type(task2).type('{enter}')
        todoList.getTodoList().should('contain.text', task2)
    }
);

Cypress.Commands.add('createOneTask', (task1: any) => {
        todoList.getTodoInputField().type(task1).type('{enter}')
        todoList.getTodoList().should('contain.text', task1)
    }
);
