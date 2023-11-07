import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './routes/router';


function App() {

  return (
    <div className="App">
        <Header />

        <div id="contenido">
          <AppRouter />
          {/* Como router-view */}
        </div>

      <Footer />

    </div >
  );
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