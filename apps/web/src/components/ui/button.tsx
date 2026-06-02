export default function Button({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
      {children}
    </button>
  )
}