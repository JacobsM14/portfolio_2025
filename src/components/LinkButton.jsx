export default function LinkButton({ type = "link", link, children, onClick }) {
  const EMAIL = "marcel.eplu@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Optionally, handle error here
    }
  };

  const handleClick = () => {
    if (type === "link") {
      window.open(link);
    } else if (type === "cv") {
      window.open(link, "_blank");
    } else if (type === "email") {
      copyEmailToClipboard();
    } else {
      window.open(link);
    }
    
    // Execute the additional onClick callback if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-lg border-1 border-gray-normal text-white bg-black hover:bg-primary"
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
}
