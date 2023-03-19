// External Moduels
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Constants
import { ROUTES_APP } from "../Components/Constants";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES_APP.V1}
          element={
            <iframe
              src="../v1/index.html"
              style={{ border: "none", width: "100%", height: "100vh" }}
            />
          }
        />

        <Route path={ROUTES_APP.MAIN} element={<div>Main</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
