import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

test('render items in SideBar', () => {
  const sideBaritems = [
    {
      name: "test",
      href: "/test"
    },
    {
      name: "test2",
      href: "/test2"
    }
  ];

  render(<SideBar items={sideBaritems } />);
  const anchorElements = screen.getAllByRole("navigation");
  
  anchorElements.forEach((anchorElement, index) => {
    expect(anchorElement).toHaveTextContent(sideBaritems[index].name);
    expect(anchorElement).toHaveAttribute("href", sideBaritems[index].href);
  });
});