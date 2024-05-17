import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import CreateListingPage from "./pages/CreateListingPage";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import UpdateListingPage from "./pages/UpdateListingPage";
import UserListingPage from "./pages/UserListingPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
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
        <Route path="/authentication" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
