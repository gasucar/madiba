import { CalendarDays } from 'lucide-react'

export default function HeroFormHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-5">
      {/* Icon */}
      <div
        className="
        flex
        h-14
        w-14
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(205,158,92,0.08)]
        "
      >
        <CalendarDays
          size={26}
          strokeWidth={1.8}
          color="#CD9E5C"
        />
      </div>

      {/* Content */}
      <div className="">
        <h3
          className="
          max-w-xs
          text-xl
          font-bold
          leading-tight
          text-white
          "
        >
          Hablemos de tu próximo proyecto inmobiliario
        </h3>

        <p
          className="
          mt-2
          text-md
          text-gray-300
          "
        >
          Dejanos tus datos y te contactamos.
        </p>
      </div>
    </div>
  )
}