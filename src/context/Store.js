import { createContext } from "react";

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
  switch (type) {
    case "START_OSC":
      return { ...state, ...payload };

    case "START_OSC1":
      return { ...state, ...payload };

    case "START_OSC2":
      return { ...state, ...payload };

    default:
      console.log("reducer error. type: ", type, "payload: ", payload);
      return state;
  }
};
