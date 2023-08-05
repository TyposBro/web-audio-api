import PropTypes from "prop-types";

export const Osc1 = ({ settings, change, changeType }) => {
  const { type, frequency, detune } = settings;
  return (
    <div className="control">
      <h2>Osc 1</h2>
      <div className="param">
        <label htmlFor="freq">Frequency</label>
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

Osc1.propTypes = {
  settings: PropTypes.shape({
    frequency: PropTypes.number.isRequired,
    detune: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }),
  change: PropTypes.func.isRequired,
  changeType: PropTypes.func.isRequired,
};
