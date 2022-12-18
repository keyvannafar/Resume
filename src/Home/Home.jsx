
import Slidersection from "../Slidersection/Slidersection";
import "../Home/Home.css"
import Procontext from "../Context/Procontext";
import { useState} from "react";
import { Provider } from "react-redux/es/exports";
function Home() {
  const [Pro, setPro] = useState(1);
  return (
    <>
      <Procontext.Provider value={[Pro, setPro]}>
          <Slidersection />
      </Procontext.Provider>
    </>
  );
}
export default Home;
