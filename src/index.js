import ReactDOM from "react-dom/client";

import "./Index.css";
import { router } from "./App";
import { RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
