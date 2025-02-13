import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import WatchlistPage from "./pages/WatchlistPage";
import HomePage from "./pages/HomePage";
import SubscribePage from "./pages/SubscribePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/registration" element={<RegistrationPage />} />

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/watchlist" element={<WatchlistPage />} />

        <Route path="/subscribe" element={<SubscribePage />} />
      </Routes>
    </>
  );
}

export default App;
