import { useQuery } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router";
import Loader from "src/components/modules/Loader";
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

  //   if (isPending) return <h1>sdasas</h1>;

  return (
    <>
      <Routes>
        <Route index element={isPending ? <Loader /> : <HomePage />} />
        <Route
          path='/dashboard'
          element={
            isPending ? (
              <Loader />
            ) : data ? (
              <DashboardPage />
            ) : (
              <Navigate to='/auth' />
            )
          }
        />
        <Route
          path='/auth'
          element={data ? <Navigate to='/dashboard' /> : <AuthPage />}
        />
        <Route
          path='/admin'
          element={
            isPending ? (
              <Loader />
            ) : data && data.data.role === "ADMIN" ? (
              <AdminPage />
            ) : (
              <Navigate
                to='/
              '
              />
            )
          }
          //   element={<AdminPage />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Router;

// 09189990099 => AdminAccountNumber => for  using AdminAccount
