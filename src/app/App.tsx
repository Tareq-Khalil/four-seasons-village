import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell"
import { HomePage } from "../pages/HomePage";
import { VillagePage } from "../pages/VillagePage";
import { LoginPage } from "../pages/LoginPage";
import { AdminPage } from "../pages/AdminPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route element={<AppShell/>}>
        <Route path="/village" element={<VillagePage />} />
        <Route path="/admin" element={<AdminPage/>} />
      </Route>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="*" element={<Navigate to="/" replace />}/>

    </Routes>
  );
}