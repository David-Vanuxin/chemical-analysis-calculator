import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Counter from "./components/Counter"
import Echo from "./components/Echo"


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/echo">Echo</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" caseSensitive={false} element={<About />} />
          <Route path="/users" caseSensitive={false} element={<Users />} />
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/counter" caseSensitive={false} element={<Counter />} />
          <Route path="/echo" caseSensitive={false} element={<Echo />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}