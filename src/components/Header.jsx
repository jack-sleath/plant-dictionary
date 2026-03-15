import { Link, NavLink } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'

function Header() {
  const { favourites } = useFavourites()
  const count = favourites.length

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <nav
        className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-xl font-bold text-green-700 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
        >
          🌿 Plant Dictionary
        </Link>
        <ul className="flex items-center gap-4 list-none m-0 p-0">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  isActive ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-green-700'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center gap-1.5 ${
                  isActive ? 'text-green-700 bg-green-50' : 'text-gray-600 hover:text-green-700'
                }`
              }
              aria-label={`Favourites${count > 0 ? `, ${count} saved` : ''}`}
            >
              Favourites
              {count > 0 && (
                <span
                  className="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center"
                  aria-hidden="true"
                >
                  {count}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
