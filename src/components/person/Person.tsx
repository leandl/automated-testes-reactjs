
interface PersonProps {
  name: string;
}

export const Person = (props: PersonProps) => (
  <div role="contentinfo">
    Name is {props.name}
  </div>
)
