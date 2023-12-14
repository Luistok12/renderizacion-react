import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import US from '../pages/UseState/UseState';
import UE from '../pages/UseEffect/UseEffect';
import UF from '../pages/UseForms/UseForms';
import Hooks from '../pages/Hooks/Hooks';
import UR from '../pages/UseReducer/UseReducer';
import UC from '../pages/useContext/useContext';
import CA from '../pages/DobleAPI/ConsumiendoApi';
import URedux from '../pages/UsandoRedux/UsandoRedux';
import UReduxToolkit from '../pages/UsandoReduxToolkit/UsandoReduxToolkit';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} redirect="/Home" />
            <Route path="/Home" Component={Home} />
            <Route path="/Hooks" Component={Hooks} />
            <Route path="/Hooks/UseState" Component={US} />
            <Route path="/Hooks/UseEffect" Component={UE} />
            <Route path="/Hooks/UseForms" Component={UF} />
            <Route path="/Hooks/ContadorV2" Component={UR} />
            <Route path="/Hooks/Contexto" Component={UC} />
            <Route path="/Hooks/UsandoRedux" Component={URedux} />
            <Route path="/Hooks/ReduxToolkit" Component={UReduxToolkit} />
            <Route path="/ConsumiendoApi" Component={CA} />
        </Routes>
    );
}
export default AppRouter;