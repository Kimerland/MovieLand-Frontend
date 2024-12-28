import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/registration" element={<RegistrationPage />} />

        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
