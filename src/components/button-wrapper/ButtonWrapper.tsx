import React from "react"

interface ButtonWrapperProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export const ButtonWrapper = ({ ...rest }: ButtonWrapperProps) => (
  <button {...rest} />
)