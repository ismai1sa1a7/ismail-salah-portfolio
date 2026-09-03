const variants = {
  primary:
    "bg-accent text-white hover:bg-accent/85 shadow-[0_0_0_1px_rgba(91,110,255,0.4)]",
  ghost:
    "bg-transparent text-ink border border-border hover:border-border-hover hover:bg-white/5",
  link: "bg-transparent text-ink-muted hover:text-ink px-0",
};

/**
 * Renders a <button> or, when `href` is given, an <a>.
 * Keeping both as one component means CTAs stay visually consistent.
 */
export default function Button({
  as,
  href,
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent";
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={16} />}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto");
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
