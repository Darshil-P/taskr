import { RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import router from "./router";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
