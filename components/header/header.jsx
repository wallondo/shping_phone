import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
export default function Header(params) {
    return(<header className="header_haeder">
            <div className="header_firts_div">
                <div>
                    <select>
                        <option value="op1">Categorias</option>
                        <option value="op1">Gamers</option>
                        <option value="op1">Desiners</option>
                        <option value="op1">Programador</option>
                    </select>
                    <p>Encomende produtos da SHOPING.ONLINE</p>
                </div>
                <div>
                    <Link>Painel de comtrole</Link>
                    <Link>DEV</Link>
                    <button><img src="/img/car.png" alt="" /></button>
                </div>
            </div>
            <nav className="header_nav">
                <ol>
                    <li className="icon">
                        <Link to={"/samsung"}>
                            <img src="/img/icon.png" alt="" />
                            SHOPING.ONLINE
                        </Link>
                    </li>
                    <li><NavLink to={"/samsung"}>Início</NavLink></li>
                    <li><NavLink to={"/produtos"}>Produdtos</NavLink></li>
                    <li><Link target="_blank" to={"https://market-sooty-tau.vercel.app/"}>Emobiliários</Link></li>
                    <li><Link>Alimentos</Link></li>
                 
                </ol>
            </nav>
    </header>)
}
