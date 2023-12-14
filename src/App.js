import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './routes/router';
import { useTheme } from './context/ThemeContext';

// Importar estas 2 lineas para poder proveer Redux globalmente y asi poder encapsular el Provider a toda la app
import { Provider } from 'react-redux';
import storeProductos from '../src/redux/StoreProductos';


function App() {

  const { isDarkMode } = useTheme();

  return (

    <div className="App">

      <Provider store={storeProductos}>

        <Header />

        <div className={`contenido ${isDarkMode ? 'contenido-dark' : ''}`}>
          <AppRouter />
          {/* Como router-view */}
        </div>

        <Footer />

      </Provider>

    </div>
  )
}

export default App;

// Para realizar push al repositorio de la pagina GitHub
// git init
// git add .
// git commit -m "first commit"
// git remote add origin https://github.com/tu_usuario/Test.git
// git push -u origin master

// Para usar SASS:
// npm i sass sass-loader