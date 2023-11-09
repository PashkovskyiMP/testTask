import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
import todoList from '../page-object/todo-list.po';
import {taskName} from "../../fixtures/test-data";


Given('I mark {string} as completed', (text: string) => {
    todoList.getTodoList().contains(text).siblings('input').click()
});

Then('{string} should not be displayed', (text: string) => {
    todoList.getTodoList().should('not.contain.text', text)
});

Then('{string} should not be exist', (text: string) => {
    todoList.getTodoList().should('not.exist', text)
});

Then('{string} should be displayed', (text: string) => {
    todoList.getTodoList().should('contain.text', text)
});

Then('{string} should be remain.', (text: string) => {
    todoList.getTodoList().should('contain.text', text)
});

Given('I filter to view only {string} tasks', (text: string) => {
    todoList.getTodoFilters().contains(text).click()
});

Given('I Clear completed tasks', () => {
    todoList.getClearCompletedButton().click()
});

When('I visit the TodoMVC app', () => {
    cy.visit(Cypress.env('testUrl'));
});

Given('Add two tasks: Task 1, Task 2', () => {
    cy.createTwoTasks(taskName.task1, taskName.task2)
});

Given('Add new task: Task 1', () => {
    cy.createOneTask(taskName.task1)
});

Given('I click on remove button', () => {
    todoList.getDestroyButton().click({force: true})
});
