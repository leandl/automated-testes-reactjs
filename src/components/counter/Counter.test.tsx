import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('handles onClick', () => {
  render(<Counter />);

  const buttonElement = screen.getByText("Add One");
  const divElement = screen.getByRole("contentinfo");
  
  expect(divElement).toHaveTextContent("Count is 0");
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1");
});