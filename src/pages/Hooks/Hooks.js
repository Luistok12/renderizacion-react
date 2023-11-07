import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import '../Hooks/Hooks.scss';

const Hooks = () => {
    return(
        <Fragment>
            <div id="categorias">
                <Link to="/Hooks/UseState" class="links">UseState</Link>
                <Link to="/Hooks/UseEffect" class="links">UseEffect</Link>
                <Link to="/Hooks/UseForms" class="links">UseForms</Link>
            </div>
        </Fragment>
    )
}

export default Hooks;