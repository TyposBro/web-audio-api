import { useContext, useLayoutEffect } from "react";
import { storeCTX } from "../context/Store";
import QwertyHancock from "qwerty-hancock";
import { types } from "../context/Types";

const Keyboard = () => {
  const [, dispatch] = useContext(storeCTX);

  useLayoutEffect(() => {
    const keyboard = new QwertyHancock();

    keyboard.keyDown = (note, frequency) => {
      dispatch({ type: types.MAKE_OSC, payload: { note, frequency } });
    };
    keyboard.keyUp = (note, frequency) => {
      dispatch({ type: types.KILL_OSC, payload: { note, frequency } });
    };
  }, [dispatch]);

  return <div id="keyboard" />;
};

export default Keyboard;
