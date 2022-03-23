import { createContext, useState } from "react";

const SwitchModeContext = createContext({
  uiMode: true,
  toggleUiMode: () => {},
});

export default SwitchModeContext;

export function SwitchModeContextProvider({ children }) {
  const [uiMode, setUiMode] = useState(true);

  function toggleUiMode() {
    setUiMode(function (oldMode) {
      if (oldMode) {
        console.log("light");
        return false;
      } else {
        console.log("dark");
        return true;
      }
    });
  }

  const value = {
    uiMode,
    toggleUiMode,
  };

  return (
    <SwitchModeContext.Provider value={value}>
      {children}
    </SwitchModeContext.Provider>
  );
}
