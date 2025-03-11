import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  
  // Check that initial todos are rendered
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  
  // Input a new todo and submit
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);
  
  // Check if the new todo is added to the list
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('can toggle todo completion', () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  
  // Check if the todo is crossed out (completed)
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  
  fireEvent.click(todoItem);
  
  // Check if the todo is not crossed out (not completed)
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  
  // Check if the todo is deleted from the list
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
