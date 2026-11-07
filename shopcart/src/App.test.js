import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site name and total items', () => {
  render(<App />);
  expect(screen.getByText(/shop to react/i)).toBeInTheDocument();
  expect(screen.getByText(/0 items/i)).toBeInTheDocument();
});
