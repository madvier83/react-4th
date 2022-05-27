import logo from "./logo.svg";
import "./App.css";
import "./pages/style.css";
import { Link, Route, Routes } from "react-router-dom";
import Example from "./pages/example";
import ExampleDetail from "./pages/exampleDetail";
import ExampleCreate from "./pages/exampleCreate";
import Home from "./pages/home";
import ExampleUpdate from "./pages/exampleUpdate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/" className="link-default">
            Home
          </Link>
          -
          <Link to="/example" className="link-default">
            Examples
          </Link>
          -
          <a
            href="https://github.com/madvier83/react-4th"
            target="_blank"
            className="link-default"
          >
            GitHub
          </a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/example/:_id" element={<ExampleDetail />} />
          <Route path="/exampleCreate" element={<ExampleCreate />} />
          <Route path="/exampleUpdate/:_id" element={<ExampleUpdate />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
