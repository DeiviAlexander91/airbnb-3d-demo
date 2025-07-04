export function Card({ children }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">{children}</div>
  );
}

export function CardContent({ children }) {
  return <div className="text-sm text-gray-700">{children}</div>;
}
