export default function SectionTitle({ icon: Icon, className = "", children }) {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <span className="text-primary">
        <Icon />
      </span>
      <h2 className="min-w-0 break-words text-white font-bold">{children}</h2>
    </div>
  );
}
