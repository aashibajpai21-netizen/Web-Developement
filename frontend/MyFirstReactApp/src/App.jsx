import Header from "./Components/Header";
import Footer from "./Components/Footer";

import React from "react";

//the function name is same as the file or folder name like in java class has the same name as the file
function App() {
  return (
    <>
      <Header />
      <div id="abcd">My first React App</div>
      <p className="bg-primary ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis
        laborum eos ea sint autem et quidem blanditiis, officiis temporibus,
        fugiat dolore, culpa quam dolores odio! Nulla, neque. Sunt, voluptates!
      </p>

      <Footer />
    </>
  );
}
export default App;
