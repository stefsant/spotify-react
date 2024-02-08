
import './App.css';
import Header from './componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar'
import Footer from './componentes/Footer/Footer'
import Main from './componentes/Main/Main'

function App() {
  return(
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
