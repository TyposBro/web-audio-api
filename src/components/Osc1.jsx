import { useContext } from "react";

import { storeCTX } from "../context/Store";
import { types } from "../context/Types";

export const Osc1 = () => {
  const [state, update] = useContext(storeCTX);
  const { type, frequency, detune } = state.osc1Settings;

  const change = ({ target }) => {
    const value = target.valueAsNumber;
    const id = target.id;
    console.table({ [id]: value });
    update({ type: types.UPDATE_OSC1, payload: { id, value } });
  };

  const changeType = ({ target }) =>
    update({ type: types.UPDATE_OSC1, payload: { id: "type", value: target.id } });

  return (
    <div className="control">
      <h2>Osc 1</h2>
      <div>
        <button onClick={() => update({ type: types.START_OSC1 })}>Play</button>
        <button onClick={() => update({ type: types.STOP_OSC1 })}>Stop</button>
      </div>
      <div className="param">
        <label htmlFor="frequency">Frequency</label>
        <input max="5000" value={frequency} onChange={change} id="frequency" type="range" />
      </div>
      <div className="param">
        <label htmlFor="detune">Detune</label>
        <input value={detune} onChange={change} id="detune" type="range" />
      </div>

      <div className="param">
        <h3>Wave</h3>
        <button id="sine" onClick={changeType} className={`${type === "sine" && "active"}`}>
          sine
        </button>
        <button id="triangle" onClick={changeType} className={`${type === "triangle" && "active"}`}>
          triangle
        </button>
        <button id="square" onClick={changeType} className={`${type === "square" && "active"}`}>
          square
        </button>
        <button id="sawtooth" onClick={changeType} className={`${type === "sawtooth" && "active"}`}>
          sawtooth
        </button>
      </div>
    </div>
  );
};

export default Osc1;
