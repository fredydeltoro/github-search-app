import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import UserSearch from "./pages/UserSearch";
import RepoSearch from "./pages/RepoSearch";
import "./App.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <header className="bg-blue">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h1 className="h4 m-0">GitHub Search</h1>
            </Link>
            <div className="d-flex flex-grow-1 justify-content-center">
              <SearchBar />
            </div>
            <div>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  `btn users-btn btn btn-outline-light ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <i className="active-icon bi bi-check-lg"></i>
                <i className="status-icon bi bi-people-fill"></i>
                <span>Users</span>
              </NavLink>
              <NavLink
                to="/repos"
                className={({ isActive }) =>
                  `btn repos-btn btn btn-outline-light ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <i className="active-icon bi bi-check-lg"></i>
                <i className="status-icon bi bi-journal-bookmark-fill"></i>
                <span>Repos</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      <main className="py-4">
        <div className="container">
          <Routes>
            <Route path="/users" element={<UserSearch />} />
            <Route path="/repos" element={<RepoSearch />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
