import { useContext } from "react";
import { storeCTX } from "../context/Store";
import { types } from "../context/Types";

export const Filter = () => {
  const [state, update] = useContext(storeCTX);
  const { type, frequency, detune, gain, Q } = state.filterSettings;

  const change = ({ target }) => {
    const value = target.valueAsNumber;
    const id = target.id;
    state.osc1[id].value = value;
    update({ type: types.UPDATE_FILTER, payload: { id, value } });
  };
  const changeType = ({ target }) =>
    update({ type: types.UPDATE_FILTER, payload: { id: "type", value: target.id } });

  return (
    <div className="control">
      <h2>Filter</h2>
      <div className="param">
        <label htmlFor="freq">Frequency</label>
        <input max="10000" value={frequency} onChange={change} id="frequency" type="range" />
      </div>
      <div className="param">
        <label htmlFor="detune">Detune</label>
        <input value={detune} onChange={change} id="detune" type="range" />
      </div>
      <div className="param">
        <label htmlFor="Q">Q</label>
        <input value={Q} onChange={change} id="Q" type="range" max="10" step="0.1" />
      </div>
      <div className="param">
        <label htmlFor="gain">gain</label>
        <input value={gain} onChange={change} id="gain" type="range" max="10" step="0.1" />
      </div>

      <div className="param">
        <h3>Type</h3>

        <button id="lowpass" onClick={changeType} className={`${type === "lowpass" && "active"}`}>
          lowpass
        </button>
        <button id="highpass" onClick={changeType} className={`${type === "highpass" && "active"}`}>
          highpass
        </button>
        <button id="bandpass" onClick={changeType} className={`${type === "bandpass" && "active"}`}>
          bandpass
        </button>

        <button id="lowshelf" onClick={changeType} className={`${type === "lowshelf" && "active"}`}>
          lowshelf
        </button>

        <button
          id="highshelf"
          onClick={changeType}
          className={`${type === "highshelf" && "active"}`}
        >
          highshelf
        </button>
        <button id="peaking" onClick={changeType} className={`${type === "peaking" && "active"}`}>
          peaking
        </button>

        <button id="notch" onClick={changeType} className={`${type === "notch" && "active"}`}>
          notch
        </button>
        <button id="allpass" onClick={changeType} className={`${type === "allpass" && "active"}`}>
          allpass
        </button>
      </div>
    </div>
  );
};

export default Filter;
