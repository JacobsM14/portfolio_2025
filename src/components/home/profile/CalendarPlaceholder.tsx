import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  footer: ReactNode;
  role?: "status" | "alert";
}

export default function CalendarPlaceholder({ children, footer, role }: Props) {
  return (
    <div
      role={role}
      className="flex flex-col gap-2 w-full max-w-103 text-[14px] leading-normal"
    >
      <div className="pt-0.5">
        <div className="aspect-412/130 desktop:max-h-[calc(100cqh-3rem)] flex flex-col items-center justify-center gap-2 text-center">
          {children}
        </div>
      </div>
      <div className="flex items-center justify-center h-5.25">{footer}</div>
    </div>
  );
}
