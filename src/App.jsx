import { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <h1 className="title">React Counter</h1>
      <p className="counter-value">{value}</p>
      <button className="counter-button" onClick={() => setValue(value + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
