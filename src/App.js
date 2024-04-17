import "./App.css";
import { Link } from "react-router-dom";
import Router from "./Route";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <nav className="Navbar">
          <Link to={"/ex1"}>Ex1</Link>
          <Link to={"/ex2"}>Ex2</Link>
          <Link to={"/ex3"}>Ex3</Link>
          <Link to={"/ex4"}>Ex4</Link>
          <Link to={"/ex5"}>Ex5</Link>
          <Link to={"/ex6"}>Ex6</Link>
        </nav>
        <p>
          <code>Hồ Nhật Huy 21522140</code>
        </p>
      </div>

      <Router />
    </div>
  );
}

export default App;
