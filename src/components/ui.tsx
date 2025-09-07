import { BadgeHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export Pill Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-2xl border px-3 py-1 text-xs">
      {children}
    </span>
  )
}

export function Button(
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { variant?: 'solid' | 'outline' }
) {
  const { className = '', variant = 'solid', ...rest } = props
  const base = 'inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm'
  const kind = variant === 'outline' ? 'border' : 'bg-black text-white'
  return <button className={`${base} ${kind} ${className}`} {...rest} />
}
