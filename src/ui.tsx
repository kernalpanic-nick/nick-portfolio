import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export function Pill({ children }: { children: React.ReactNode }) {
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
  const base = 'inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors'
  const kind = variant === 'outline' 
    ? 'border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800' 
    : 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200'
  const disabled = 'disabled:opacity-50 disabled:cursor-not-allowed'
  const classes = `${base} ${kind} ${disabled} ${className}`
  return <button className={classes} {...rest} />
}
