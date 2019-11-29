import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [newDetails, setNewDetails] = React.useState({
    id: "",
    firstName: "",
    lastName: ""
  });
  const changeStuff = () => {
    setNewDetails({ ...newDetails, id: 2 });
    setNewDetails({ ...newDetails, firstName: "first Name" });
    setNewDetails({ ...newDetails, lastName: "last Name" });
  };
  const changeStuff2 = () => {
    setNewDetails(prev => ({ ...prev, id: 2 }));
    setNewDetails(prev => ({ ...prev, firstName: "first Name" }));
    setNewDetails(prev => ({ ...prev, lastName: "last Name" }));
  };
  return (
    <div className="App">
      <button onClick={() => setNewDetails({})}>RESET</button>
      <button onClick={changeStuff}>click here to change stuff</button>
      <button onClick={changeStuff2}>click here to change stuff</button>
      <p>newDetails-id:{newDetails.id}</p>
      <p>newDetails-firstName:{newDetails.firstName}</p>
      <p>newDetails-lastName:{newDetails.lastName}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
