import { useState } from "react";
import "./App.scss";

import { Osc1, Filter } from "./components/";

const ctx = new AudioContext();
const out = ctx.destination;

const osc1 = ctx.createOscillator();
const gain1 = ctx.createGain();
const filter = ctx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    type: filter.type,
    Q: filter.Q.value,
    gain: filter.gain.value,
  });

  const changeFilter = ({ target }) => {
    const value = target.valueAsNumber;
    const id = target.id;
    filter[id].value = value;
    setFilterSettings({ ...filterSettings, [id]: value });
  };

  const changeFilterType = ({ target }) => {
    const id = target.id;
    filter.type = id;
    setFilterSettings({ ...filterSettings, type: id });
  };

  const changeOsc1 = ({ target }) => {
    const value = target.valueAsNumber;
    const id = target.id;
    osc1[id].value = value;
    setOsc1Settings({ ...osc1Settings, [id]: value });
  };

  const changeType = ({ target }) => {
    const id = target.id;
    osc1.type = id;
    setOsc1Settings({ ...osc1Settings, type: id });
  };

  return (
    <div className="app">
      <div className="switch">
        <h1>Sliders</h1>
        <button onClick={() => osc1.start()}>Play</button>
        <button onClick={() => osc1.stop()}>Stop</button>
      </div>

      <Osc1 change={changeOsc1} settings={osc1Settings} changeType={changeType} />
      <Filter change={changeFilter} settings={filterSettings} changeType={changeFilterType} />
    </div>
  );
}

export default App;
