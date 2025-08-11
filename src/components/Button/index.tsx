type ButtonProps = {
  children?: React.ReactNode;
} & React.ComponentProps<"button">;

export function Button({...props }: ButtonProps) {
  return <button {...props}/>;
}
