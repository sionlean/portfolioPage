// External Moduels
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Local Modules
import Main from "./Main";

// Constants
import { ROUTES_APP } from "../Constants/Constants";

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

        <Route path={ROUTES_APP.MAIN} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
