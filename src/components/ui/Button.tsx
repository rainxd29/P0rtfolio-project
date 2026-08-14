// @ts-nocheck
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-ink-900 text-mint-100 hover:bg-ink-800",
  outline: "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-mint-100",
  ghost: "text-ink-900 hover:bg-sage-400/20",
};

export default function Button({ children, variant = "primary", className, href, to, ...props }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200",
    variants[variant],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}