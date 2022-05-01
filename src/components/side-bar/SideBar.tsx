
interface SideBarItem {
  name: string;
  href: string;
}

interface SideBarProps {
  items: SideBarItem[];
}

export const SideBar = (props: SideBarProps) => (
  <div>
    <ul>
      {props.items.map(item => (
        <li key={item.href}>
          <a role="navigation" href={item.href}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);