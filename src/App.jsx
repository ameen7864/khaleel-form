import React from "react";
import Assesment from "./componets/Assesment";
import Cards from "./componets/Cards";
import Traget from "./componets/Traget";
import Route from "./Route";

const App = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[100vh]">
      <Route path="/">
        <Assesment />
      </Route>
      <Route path="/cards">
        <Cards />
      </Route>
      <Route path="/target">
        <Traget />
      </Route>
    </div>
  );
};

export default App;
