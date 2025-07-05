export default function Button({ children, asChild }) {
  const Comp = asChild ? 'span' : 'button';
  return (
    <Comp className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      {children}
    </Comp>
  );
}
