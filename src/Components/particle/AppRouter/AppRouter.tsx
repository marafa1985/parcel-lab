import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { MainLayout } from "components/templates/MainLayout/MainLayout";
import { OderView } from "components/pages/OrderView/OderView";
import { SignIn } from "components/pages/SignIn/SignIn";

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
