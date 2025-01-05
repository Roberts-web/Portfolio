
import './App.scss';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Navigations from './components/NavList'
import Personals from './components/Personals'



function App() {
  return (
    <div className="App">
      <div className="App-header">

        <header>
          <Navigations />
          <Personals />
        </header>

        <section className='section' >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ex nostrum! Possimus, veritatis mollitia deleniti quibusdam laudantium tenetur eum cumque in animi a adipisci maxime, sint vitae alias quidem totam.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ex nostrum! Possimus, veritatis mollitia deleniti quibusdam laudantium tenetur eum cumque in animi a adipisci maxime, sint vitae alias quidem totam.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ex nostrum! Possimus, veritatis mollitia deleniti quibusdam laudantium tenetur eum cumque in animi a adipisci maxime, sint vitae alias quidem totam.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ex nostrum! Possimus, veritatis mollitia deleniti quibusdam laudantium tenetur eum cumque in animi a adipisci maxime, sint vitae alias quidem totam.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ex nostrum! Possimus, veritatis mollitia deleniti quibusdam laudantium tenetur eum cumque in animi a adipisci maxime, sint vitae alias quidem totam.</p>
        </section>

       
        <footer >
          <Footer />
        </footer>
        <BackToTop />

      </div>
    </div>
  );
}

export default App;
