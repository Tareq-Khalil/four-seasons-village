import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell"
import { HomePage } from "../pages/HomePage";
import { VillagePage } from "../pages/VillagePage";
import { JournalPage} from "../pages/JournalPage";
import { ProfilePage} from "../pages/ProfilePage";
import { LoginPage } from "../pages/LoginPage";
import { AdminPage } from "../pages/AdminPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route element={<AppShell/>}>
        <Route path="/village" element={<VillagePage />} />
        <Route path="/jounal" element={<JournalPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />}/>

    </Routes>
  );
}