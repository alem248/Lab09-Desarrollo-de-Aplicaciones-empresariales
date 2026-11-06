function Button({ children, variant = 'primary', className = '', type = 'button', ...props }) {
  const clases = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  return (
    <button type={type} className={clases} {...props}>
      {children}
    </button>
  )
}

export default Button
