import AddDonation from "./components/AddDonation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DonationsUser from "./components/DonationsUser";


function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<AddDonation/>}/>
    <Route path="/donations" element={<DonationsUser/>}/>
    </Routes>
   </Router>
  );
}

export default App;
