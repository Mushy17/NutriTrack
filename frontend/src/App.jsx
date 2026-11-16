import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import EntryDetailPage from "./pages/EntryDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/entries/:id" element={<EntryDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  );
}
