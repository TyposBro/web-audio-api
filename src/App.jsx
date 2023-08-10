import "./App.scss";

import { Osc1, Filter } from "./components/";
// import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="app">
      <div className="switch">
        <h1>Sliders</h1>
      </div>

      <Osc1 />
      <Filter />
      {/* <Keyboard /> */}
    </div>
  );
}

export default App;
