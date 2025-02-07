import React from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import App from "./app";
import Samsung from "../components/parts/samsung";
import Iphone from "../components/parts/iphone";
import Motorola from "../components/parts/motorola";
import Infinix from "../components/parts/infinix";
import Redmin from "../components/parts/nokia";
import Produtos from "../components/produtos/produtos";
export default function Routas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index path="samsung" element={<Samsung/>}></Route>
                    <Route path="iphone" element={<Iphone/>}></Route>
                    <Route path="motorola" element={<Motorola/>}></Route>
                    <Route path="redmin" element={<Redmin/>}></Route>
                    <Route path="infinix" element={<Infinix/>}></Route>
                </Route>
                <Route path="/produtos" element={<Produtos/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
} 