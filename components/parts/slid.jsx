import React from "react";
import "./slid.css";
import { Link } from "react-router-dom";


export default function Slid(params){
    return(
        <div className="slid">
            <div>
                <h1>O MELHOR DO MERCADO PARA TI</h1>
                <span>
                    <h3>SuperCharges for pros.</h3>
                    <h2>AO99999.00</h2>
                </span>
                <p>form soppt secton 2023/02/09 to sell</p>
                <span>
                    <button>ver agora </button>
                    <Link>Leran more</Link>
                </span>    
                </div>
                <div>
                <span>
                </span>    
                </div>
        </div>
    )
}



