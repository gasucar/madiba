export default function HeroStats() {
  const stats = [
    {
      value: '24',
      label: 'Edificios',
      description: 'entregados en zona oeste',
    },
    {
      value: '1.791',
      label: 'Departamentos',
      description: 'entregados',
    },
    {
      value: '122k',
      label: 'M² construidos',
      description: 'con altos estándares',
    },
  ]

  return (
    <div className="flex gap-10 pt-6 flex-wrap">
      {stats.map((stat, i) => (
        <div key={i}>
          <p className="text-3xl font-bold">{stat.value}</p>
          <p className="text-accent uppercase text-sm">{stat.label}</p>
          <p className="text-sm text-gray-300">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}