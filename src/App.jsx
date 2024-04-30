import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import CreateListingPage from "./pages/CreateListingPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UpdateListingPage from "./pages/UpdateListingPage";
import UserListingPage from "./pages/UserListingPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import ListingPage from "./pages/ListingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/authentication" element={<AuthPage />} />
          <Route path="/listing/:listingId" element={<ListingPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create-listing" element={<CreateListingPage />} />
            <Route path="/user-listing" element={<UserListingPage />} />
            <Route
              path="/update-listing/:listingId"
              element={<UpdateListingPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
