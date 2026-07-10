type SnackbarProps = {
  message: string;
  type: "success" | "error";
};

export default function Snackbar({ message, type }: SnackbarProps) {
  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        rounded-lg px-5 py-3
        text-sm font-medium text-white
        shadow-lg transition-all duration-300
        ${
          type === "success"
            ? "bg-emerald-600"
            : "bg-red-600"
        }
      `}
    >
      {message}
    </div>
  );
}