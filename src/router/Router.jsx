import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import PageNotFound from "src/pages/404";
import AdminPage from "src/pages/AdminPage";
import AuthPage from "src/pages/AuthPage";
import DashboardPage from "src/pages/DashboardPage";
import HomePage from "src/pages/HomePage";
import { getProfile } from "src/services/user";

const Router = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  console.log({ data, isPending, error });
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
