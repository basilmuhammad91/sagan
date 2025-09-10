import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function AppLayout({ children }) {
  const { auth } = usePage().props;

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-sm navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            {import.meta.env.VITE_APP_NAME || "Laravel"}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left Side */}
            <ul className="navbar-nav me-auto"></ul>

            {/* Right Side */}
            <ul className="navbar-nav ms-auto">
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href={route("login")}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href={route("register")}>
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    id="navbarDropdown"
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {auth.user.name}
                  </a>

                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item"
                      href={route("logout")}
                      method="post"
                      as="button"
                    >
                      Logout
                    </Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="py-4">{children}</main>
    </div>
  );
}
