import { ReactNode } from "react";

const Button: React.FC<{ children: ReactNode; secondary?: Boolean }> = ({
  children,
  secondary,
}) => {
  return (
    <div
      className={`rounded px-8 py-3 text-center text-lg  font-semibold ${
        secondary
          ? "border-white-800 rounded border px-8 py-3 text-lg font-semibold"
          : "bg-red-600 text-gray-50 hover:bg-red-700"
      }`}
    >
      <p>{children}</p>
    </div>
  );
};

export default Button;
