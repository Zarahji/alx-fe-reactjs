import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

// Test: Renders TodoList component with initial todos
test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  
  // Check if initial todos are rendered
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Write Tests')).toBeInTheDocument();
});

// Test: Add a new todo
test('can add a new todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');
  
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);
  
  // Check if the new todo appears in the list
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test: Toggle a todo completion
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

// Test: Delete a todo
test('can delete a todo', () => {
  render(<TodoList />);
  
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
