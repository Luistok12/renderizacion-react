import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import US from '../pages/UseState/UseState';
import UE from '../pages/UseEffect/UseEffect';
import UF from '../pages/UseForms/UseForms';
import Hooks from '../pages/Hooks/Hooks';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} redirect="/Home" />
            <Route path="/Home" Component={Home} />
            <Route path="/Hooks" Component={Hooks} />
            <Route path="/Hooks/UseState" Component={US} />
            <Route path="/Hooks/UseEffect" Component={UE} />
            <Route path="/Hooks/UseForms" Component={UF} />
        </Routes>
    );
}
export default AppRouter;