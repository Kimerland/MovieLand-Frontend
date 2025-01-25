import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import WatchlistPage from "./pages/WatchlistPage";
import PersonalInformation from "./Navpages/PersonalInformation/PersonalInformation";
import DataPrivacy from "./Navpages/DataPrivacy/DataPrivacy";
import Security from "./Navpages/Security/Security";
import AccessSettings from "./Navpages/AccessSettings/AccessSettings";
import Payments from "./Navpages/Payments/Payments";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/registration" element={<RegistrationPage />} />

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/watchlist" element={<WatchlistPage />} />

        <Route path="/PersonalInformation" element={<PersonalInformation />} />

        <Route path="/data" element={<DataPrivacy />} />

        <Route path="/security" element={<Security />} />

        <Route path="/AccessSettings" element={<AccessSettings />} />

        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  );
}

export default App;
