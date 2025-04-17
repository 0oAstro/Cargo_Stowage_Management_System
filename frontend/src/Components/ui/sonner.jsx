import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  // Use light theme by default
  const theme = "light";

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)"
        }
      }
      {...props} />
  );
}

export { Toaster }
