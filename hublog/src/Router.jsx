import { Routes, Route } from "react-router-dom";
import NextScreen from "./Screen/Next/Next";
import Form from "./Component/Form/Form";
import AdminPage from "./Screen/adminPage/AdminPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/admin_page_secured_log" element={<AdminPage />} />
      <Route path="/next" element={<NextScreen />} />
    </Routes>
  );
};

export default Router;
