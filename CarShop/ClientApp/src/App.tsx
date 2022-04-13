import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About";
import { AddNewVehiclePage } from "./pages/AddNewVehiclePage";
import { CarDetailsPage } from "./pages/CarDetailsPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ForbiddenPage } from "./pages/ForbiddenPage";
import { AuthRoute } from "./layout/AuthRoute";
import { AuthContextProvider } from "./api/auth";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car-detail/:id" element={<CarDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/new-vehicle"
            element={
              <AuthRoute>
                <AddNewVehiclePage />
              </AuthRoute>
            }
          />
          <Route path="/forbidden" element={<ForbiddenPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
