import * as React from "react";
import {createRoot} from "react-dom/client";
import SetStatePage from "./pages/SetStatePage";

const root = createRoot(document.getElementById("root"));

root.render(<SetStatePage />);

console.log("React", React.version); //sy-log
