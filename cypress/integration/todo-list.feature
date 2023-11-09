Feature: Test Task

  Background:
    When I visit the TodoMVC app

  Scenario: Adding a new task
    And Add new task: Task 1
    And I filter to view only 'All' tasks
    Then 'Task 1' should be displayed

  Scenario: Mark a task as completed
    And Add new task: Task 1
    And I mark 'Task 1' as completed
    And I filter to view only 'Completed' tasks
    Then 'Task 1' should be displayed

  Scenario: Deleting a task
    And Add new task: Task 1
    And I click on remove button
    Then 'Task 1' should not be exist

  Scenario: Checking task filtering
    And Add two tasks: Task 1, Task 2
    And I mark 'Task 1' as completed
    And I filter to view only 'Active' tasks
    Then 'Task 1' should not be displayed
    And I filter to view only 'Completed' tasks
    Then 'Task 1' should be displayed
    And I Clear completed tasks
    Then 'Task 1' should not be displayed
    And I filter to view only 'All' tasks
    Then 'Task 2' should be remain.
