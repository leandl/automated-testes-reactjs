import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonWrapper } from './ButtonWrapper';

test('handles onClick', () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick}>Add Item</ButtonWrapper>);

  const buttonElement = screen.getByText("Add Item");
  fireEvent.click(buttonElement);

  expect(onClick).toHaveBeenCalledTimes(1);
});