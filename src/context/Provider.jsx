import { useReducer } from "react";
import PropTypes from "prop-types";
import { reducer, initialState, storeCTX } from "./Store";

export default function Provider({ children }) {
  const stakeHook = useReducer(reducer, initialState);

  return <storeCTX.Provider value={stakeHook}>{children}</storeCTX.Provider>;
}

// proptypes
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
