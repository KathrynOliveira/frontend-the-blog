type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children?: React.ReactNode;
} & React.ComponentProps<"button">;

type ButtonVariants = "default" | "ghost" | "danger";
type ButtonSizes = "sm" | "md" | "lg";

export function Button({
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: "bg-blue-600 text-blue-100",
    ghost: "bg-slate-200 text-slate-900",
    danger: "bg-red-600 text-red-100",
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: "",
    md: "",
    lg: "",
  };

  const buttonClasses = [buttonVariants[variant], buttonSizes[size]].join(" ");

  return <button className={buttonClasses} {...props} />;
}
