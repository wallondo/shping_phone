import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
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
                        <Link to={"/"}>
                            <img src="/img/icon.png" alt="" />
                            SHOPING.ONLINE
                        </Link>
                    </li>
                    <li><Link>Produdtos</Link></li>
                    <li>
                       Outros : 
                    </li>
                    <li>
                    <li><Link>Emobiliários</Link></li>
                    </li>
                    <li><Link>Alimentos</Link></li>
                 
                </ol>
                <div>
                    <input type="text"  placeholder="Pesquisar em produto : "/>
                    <span><img src="/img/lupa.jpg" alt="" /></span>
                </div>
            </nav>
    </header>)
}
