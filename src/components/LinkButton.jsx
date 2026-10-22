const buttonClass =
  "p-2 rounded-lg border-1 border-gray-normal text-white bg-black hover:bg-primary inline-flex items-center justify-center cursor-pointer";

export default function LinkButton({
  type = "link",
  link,
  label,
  children,
  onClick,
}) {
  if (type !== "email") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={buttonClass}
      >
        {children}
      </a>
    );
  }

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(link.replace(/^mailto:/, ""));
      onClick?.();
    } catch {
      window.location.href = link;
    }
  };

  return (
    <button
      type="button"
      onClick={handleEmailClick}
      aria-label={label}
      title={label}
      className={buttonClass}
    >
      {children}
    </button>
  );
}
