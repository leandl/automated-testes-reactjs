import { useState } from "react";
import { ButtonWrapper } from "../button-wrapper/ButtonWrapper";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <ButtonWrapper onClick={() => setCount(count + 1)}>Add One</ButtonWrapper>
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
}