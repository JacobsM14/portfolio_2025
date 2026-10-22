export default function TechBase({ paddings, margins, texts, children }) {
  return (
    <div
      className={`bg-gray-light/40 text-white font-bold rounded-full ${texts ? texts : "text-sm"} ${
        paddings ? paddings : ""
      } ${margins ? margins : ""}`}
    >
      {children}
    </div>
  );
}
