import React from "react";
import { Route, Routes, Link } from "react-router-dom";
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
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  aria-label="Search"
                />
              </div>
            </div>
            <div>
              <Link to="/users" className="users-btn btn btn-outline-light">
                USERS
              </Link>
              <Link to="/repos" className="repos-btn btn btn-outline-light">
                REPOS
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="py-4">
        <div className="container">
          <Routes>
            <Route path="/users" element={<div>Users Search Page</div>} />
            <Route
              path="/repos"
              element={<div>Repositories Search Page</div>}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
