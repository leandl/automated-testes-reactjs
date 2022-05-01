import { render, screen } from '@testing-library/react';
import { Person } from './Person';

test('render a person name', () => {
  render(<Person name="Leandro" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Name is Leandro");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
