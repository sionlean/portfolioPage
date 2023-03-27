// External Modules
import { createRoot } from "react-dom/client";

// Local Modules
import AppRoutes from "./Routes";
import "../../Scss/main.scss";

const App = (): JSX.Element => {
  return <AppRoutes />;
};

// Render App
try {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(<App />);
} catch (err) {
  throw err;
}
