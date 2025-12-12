import { ReactNode } from "react";

export function NewspaperTankSection({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        bg-center
        bg-cover
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/nen-1.jpg')",
      }}
    >
      {children}
    </div>
  );
}
