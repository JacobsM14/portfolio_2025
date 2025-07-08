export default function TechBase({ paddings, margins, texts, children, key }) {
  return (
    <div
      className={`bg-gray-light/40 text-white font-bold rounded-full ${texts ? texts : "text-sm"} ${
        paddings ? paddings : ""
      } ${margins ? margins : ""}`}
        key={key}
    >
      {children}
    </div>
  );
}
