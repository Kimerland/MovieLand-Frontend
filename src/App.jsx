import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
