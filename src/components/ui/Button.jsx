// src/components/ui/button.jsx
import clsx from "clsx";

export function Button({ children, className, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded-xl font-medium transition";
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
