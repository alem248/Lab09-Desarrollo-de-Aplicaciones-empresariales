import cinema from '../../data/cinema'

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#" className="header__logo">
          Cine<span>Max</span>
        </a>
        <nav className="header__nav" aria-label="Principal">
          <ul>
            {cinema.navegacion.map((item) => (
              <li key={item.href}>
                <a className="header__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header