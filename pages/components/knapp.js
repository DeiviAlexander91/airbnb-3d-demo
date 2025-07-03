export function Button({ children, asChild }) {
  return (
    <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800">
      {children}
    </button>
  );
}
