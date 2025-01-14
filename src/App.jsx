import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import WatchlistPage from "./pages/WatchlistPage";
import PersonalInformation from "./Navpages/PersonalInformation";
import DataPrivacy from "./Navpages/DataPrivacy";
import Security from "./Navpages/Security";
import AccessSettings from "./Navpages/AccessSettings";
import Payments from "./Navpages/Payments";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />

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
