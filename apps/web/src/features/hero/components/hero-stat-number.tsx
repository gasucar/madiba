'use client'

import CountUp from 'react-countup'

type HeroStatNumberProps = {
  end: number
  suffix?: string
  prefix?: string
  separator?: string
}

export default function HeroStatNumber({
  end,
  suffix,
  prefix,
  separator,
}: HeroStatNumberProps) {
  return (
    <CountUp
      start={0}
      end={end}
      duration={2.5}
      separator={separator}
      suffix={suffix}
      prefix={prefix}
    />
  )
}