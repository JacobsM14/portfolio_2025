export default function LinkButton({ type = "link", link, children }) {
  const EMAIL = "marcel.eplu@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Optionally, handle error here
    }
  };

  return (
    <button
      {...(type === "link"
        ? { onClick: () => window.open(link) }
        : type === "cv"
        ? { onClick: () => window.open(link, "_blank") }
        : type === "email"
        ? { onClick: () => copyEmailToClipboard() }
        : { onClick: () => window.open(link) })}
      className="p-2 rounded-lg border-1 border-gray-normal text-white bg-black hover:bg-primary"
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
}
