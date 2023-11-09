import 'createTodoItem';

declare global {
    namespace Cypress {
        interface Chainable {

            createTwoTasks(task1: any, task2: any): Cypress.Chainable<void>;

            createOneTask(task1: any): Cypress.Chainable<void>;

        }
    }
}
