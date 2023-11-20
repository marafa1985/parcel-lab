import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { OderView } from "../../pages/OrderView/OderView";
import { SignIn } from "../../pages/SignIn/SignIn";
import { MainLayout } from "../../templates/MainLayout/MainLayout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/orderview"
          element={
            <RequireAuth>
              <OderView />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};
