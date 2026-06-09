import logo from "./assets/cravings.png";

const App = () => {
  return (
    <>
      <div className=" p-1 bg-orange-500 flex items-center justify-between ">
        <div className="w-20 mx-3 ">
          <img src={logo} alt="bg image " />
        </div>
        <div>
          <button className=" bg-orange-500  hover: outline  rounded text-light fs-6 px-4 p-2 ">
            {" "}
            Login
          </button>
          <button className=" bg-amber-50 hover:bg-orange-500 rounded text-danger fs-6 px-4 p-2 ">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
