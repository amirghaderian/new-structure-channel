import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Dashboard, Login } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/overview" element={<Overview />} />
        <Route path="/services" element={<Services />} />
        <Route path="/installments" element={<Installments />} /> */}
      </Routes>
    </Router>
  );
};
export default App;
