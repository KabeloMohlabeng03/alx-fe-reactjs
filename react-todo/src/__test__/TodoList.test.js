import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

// Test for initial render
test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});

// Test for rendering initial todos
test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

// Test for adding a new todo
test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test for toggling a todo
test('toggles a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: none');
});

// Test for deleting a todo
test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];

  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React')).toBeNull();
});
