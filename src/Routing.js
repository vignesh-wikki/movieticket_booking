import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Bookingform from "./Bookingform";
import App from "./App";


function Routing() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/booking/:id" element={<Bookingform />}></Route>
      </Routes>
    </Router>
  );
}

export default Routing;
