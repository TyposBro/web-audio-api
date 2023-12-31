import { createContext } from "react";
import { types } from "./Types";

const audioCTX = new AudioContext();
const out = audioCTX.destination;

const osc1 = audioCTX.createOscillator();
const gain1 = audioCTX.createGain();
const filter = audioCTX.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

export const storeCTX = createContext();

export const initialState = {
  osc1Settings: {
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
  },
  filterSettings: {
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    type: filter.type,
    Q: filter.Q.value,
    gain: filter.gain.value,
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  const { id, value, note, frequency } = payload || {};
  switch (type) {
    case types.START_OSC1:
      console.log(osc1);
      if (osc1?.context?.state === "running") return { ...state };
      osc1.start();
      return { ...state };

    case types.STOP_OSC1:
      osc1.stop();
      return { ...state };

    case types.UPDATE_OSC1:
      return { ...state, osc1Settings: { ...state.osc1Settings, [id]: value } };

    case types.UPDATE_FILTER:
      return { ...state, filterSettings: { ...state.filterSettings, [id]: value } };

    case types.MAKE_OSC:
      console.log(note, frequency);
      return { ...state };

    // const newOsc = audioCTX.createOscillator();
    // const newGain = audioCTX.createGain();
    // newOsc.connect(newGain);
    // newGain.connect(filter);
    // newOsc.start();
    // return { ...state, oscs: [...state.oscs, { id: state.oscs.length, osc: newOsc, gain: newGain }] };

    case types.KILL_OSC:
      console.log(note, frequency);
      return { ...state };

    // const newOscs = state.oscs.filter((osc) => osc.id !== id);
    // newOscs.forEach((osc) => osc.osc.stop());
    // return { ...state, oscs: newOscs };

    default:
      console.log("reducer error. type: ", type, "payload: ", payload);
      return state;
  }
};
