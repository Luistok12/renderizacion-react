import React from "react";
import '../Home/Home.scss';

const Home = () => {

    return (
    // Siempre debe estar encerrado por un className o podemos usar el hook Fragment para no colocarlo.
        <div id="Home">     
            <p>En esta WEB encontraras ejercicios resueltos</p>
        </div>
    )
}

export default Home;