import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RSVPForm from "./components/RSVPForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RSVPForm" element={<RSVPForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
