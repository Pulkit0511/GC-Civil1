import { Link } from "react-router-dom";
import { useAuth, logout } from "wasp/client/auth";
import { getUsername } from "wasp/auth";
import './Main.css'

export const Layout = ({ children }) => {
  const { data: user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-3xl font-bold">IIT BBS Transport</h1>
          </Link>
          { user ? (
            <span className="text-lg">
              Hi, <span className="font-semibold">{getUsername(user)}!</span>{' '}
              <button onClick={logout} className="underline">
                Log out
              </button>
            </span>
          ) : (
            <Link to="/login">
              <h1 className="underline">Log in</h1>
            </Link>
          )}
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};
