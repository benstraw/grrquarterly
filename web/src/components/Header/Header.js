import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Header = () => {
  const { logOut, isAuthenticated, currentUser, hasRole } = useAuth()

  return (
    <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
      <h1 className="text-5xl font-semibold tracking-tight">
        <Link
          className="text-blue-400 hover:text-blue-100 transition duration-100"
          to={routes.home()}
        >
          GrrQ
        </Link>
      </h1>
      <nav>
        <ul className="relative flex items-center font-light">
          <li>
            <Link
              className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              to={routes.about()}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              to={routes.contact()}
            >
              Contact
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <div>
                {hasRole('admin') && (
                  <Link
                    className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                    to={routes.adminHome()}
                  >
                    Admin
                  </Link>
                )}
                <button
                  type="button"
                  onClick={logOut}
                  className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to={routes.login()}
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              >
                Login
              </Link>
            )}
          </li>
          {isAuthenticated && (
            <li>
              <Link
                to={routes.profile()}
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              >
                <i className="fa fa-user"></i>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
