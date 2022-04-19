import { createContext, useState } from "react";
const { data } = require("./../json/data.json");

export const Context = createContext();
export const Provider = (props) => {
  const [programData, setProgramData] = useState(null);
  const [program, setProgram] = useState("");

  const handleSetProgramData = (program) => {
    setProgramData(data[program]);
  };
  const handleSetProgram = (program) => setProgram(program);

  return (
    <Context.Provider
      value={{
        programData,
        program,
        actions: {
          setProgramData: handleSetProgramData,
          setProgram: handleSetProgram,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
