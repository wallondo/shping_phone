import React from "react";
import reactDOM from "react-dom/client"
import { StrictMode } from "react";
import Routas from "./rotas";



const route = reactDOM.createRoot(document.getElementById("root"))

route.render(
    <StrictMode>
        <Routas/>
    </StrictMode>
)