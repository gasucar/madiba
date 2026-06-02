export default function HeroForm() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-xl">
      <h3 className="text-xl font-semibold mb-2">
        Hablemos de tu próximo proyecto
      </h3>

      <p className="text-sm text-gray-300 mb-6">
        Dejanos tus datos y te contactamos.
      </p>

      <div className="space-y-4">
        <input
          placeholder="Nombre y apellido"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
        />
        <input
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
        />
        <input
          placeholder="Teléfono"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
        />
        <textarea
          placeholder="Contanos tu proyecto"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none"
        />

        <button className="w-full bg-accent text-primary py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Enviar consulta
        </button>
      </div>
    </div>
  )
}