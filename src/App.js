import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer/Customer";
import CustomerDetails from "./pages/CustomerDetails/CustomerDetails";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="otherPage">
        <Topbar />
          <Routes>
            <Route path="/" element={<Customer />}></Route>
            <Route path="customerDetails/:customerId" element={<CustomerDetails />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
