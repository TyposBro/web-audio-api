import PropTypes from "prop-types";

export const Filter = ({ settings, change, changeType }) => {
  const { type, frequency, detune, gain, Q } = settings;
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
        <input value={Q} onChange={change} id="Q" type="range" max="10" />
      </div>
      <div className="param">
        <label htmlFor="gain">gain</label>
        <input value={gain} onChange={change} id="gain" type="range" max="10" />
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

export default Filter;

Filter.propTypes = {
  settings: PropTypes.shape({
    frequency: PropTypes.number.isRequired,
    detune: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    Q: PropTypes.number.isRequired,
    gain: PropTypes.number.isRequired,
  }),
  change: PropTypes.func.isRequired,
  changeType: PropTypes.func.isRequired,
};
