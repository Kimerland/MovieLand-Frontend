import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import WatchlistPage from "./pages/WatchlistPage";
import HomePage from "./pages/HomePage";
import SubscribePage from "./pages/SubscribePage";
import MessagesPage from "./pages/MessagesPage";
import CinemaHub from "./pages/CinemaHub";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/registration" element={<RegistrationPage />} />

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/watchlist" element={<WatchlistPage />} />

        <Route path="/cinema" element={<CinemaHub />} />

        <Route path="/subscribe" element={<SubscribePage />} />

        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </>
  );
}

export default App;
