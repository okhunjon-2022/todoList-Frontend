import "./App.css";
import Home from "./routers/home/Home";
import About from "./routers/about/About";
import { Route, Routes } from "react-router-dom";
import Todo from "./routers/todo/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
