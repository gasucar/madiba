export default function Container({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="
      mx-auto
      w-full
      max-w-360
      px-6
      lg:px-20
      "
    >
      {children}
    </div>
  )
}