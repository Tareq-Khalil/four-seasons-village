import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { HomePage } from "../pages/HomePage";
import { VillagePage } from "../pages/VillagePage";
import { JournalPage } from "../pages/JournalPage";
import { InventoryPage } from "../pages/InventoryPage";
import { ProfilePage } from "../pages/ProfilePage";
import { MapPage } from "../pages/MapPage";
import { LoginPage } from "../pages/LoginPage";
import { AdminPage } from "../pages/AdminPage";
import { useGame } from "./GameProvider";
import { LoadingScreen } from "../components/LoadingScreen";
function ProtectedRoute({ children }: { children: React.ReactNode}) {
  const { isAuthenticated } = useGame();
  const location = useLocation();
  if (!isAuthenticated) {
    return (
      <Navigate 
        to="/login" 
        replace 
        state={{ from: location.pathname }}
       />
    );
  }
  return <>{children}</>;
}
export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route element={<AppShell />}>
        <Route 
          path="/village" 
          element={
            <ProtectedRoute>
              <VillagePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map" 
          element={
            <ProtectedRoute>
              <MapPage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventory" 
          element={
            <ProtectedRoute>
              <InventoryPage/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/journal" 
          element={
            <ProtectedRoute>
              <JournalPage/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage/>
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
}