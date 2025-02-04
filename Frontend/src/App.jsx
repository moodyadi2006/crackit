import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import TestPanel from "./pages/TestPanel"; // ✅ Corrected import (Uppercase)
import AdminPage from "./pages/AdminPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/adminPage" element={<AdminPage/>} />
          <Route path="/testPage/:testName" element={<TestPage/>} />
          <Route path="/testPanel/:testName" element={<TestPanel />} /> {/* ✅ Corrected usage */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
