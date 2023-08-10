import "./App.scss";

import { Osc1, Filter } from "./components/";

function App() {
  return (
    <div className="app">
      <div className="switch">
        <h1>Sliders</h1>
      </div>

      <Osc1 />
      <Filter />
    </div>
  );
}

export default App;
