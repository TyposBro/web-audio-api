import { useContext, useEffect } from "react";
import { storeCTX } from "../context/Store";
import QwertyHancock from "qwerty-hancock";

const Keyboard = () => {
  const [state, dispatch] = useContext(storeCTX);
  useEffect(() => {
    const keyboard = new QwertyHancock({
      id: "keyboard",
      width: 600,
      height: 150,
      octaves: 2,
      startNote: "C4",
      whiteNotesColour: "white",
      blackNotesColour: "black",
      hoverColour: "#f3e939",
    });

    keyboard.keyDown = (note, frequency) => {
      dispatch({ type: "START_OSC1", payload: { note, frequency } });
    };
    keyboard.keyUp = (note, frequency) => {
      dispatch({ type: "STOP_OSC1", payload: { note, frequency } });
    };
  }, [dispatch]);

  return (
    <div>
      Keyboard
      <div id="keyboard"></div>
    </div>
  );
};

export default Keyboard;
