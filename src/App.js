
import './App.scss';
import photo from './images/me.png'
import robert from './images/Robert.png'

function App() {
  return (
    <div className="App">
      <div className="App-header">

        <header>

        <nav className='main-nav'>
          <ul className='main-list'>
            <li>Home</li>
            <li>About me</li>
          </ul>
          <img className='logo' src={robert} alt="logo" />
          

          <ul className='main-list'>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
          
        </nav>
        <div className='perfonal-info' >
          <div className='header-info-container' >
            <h2 >Robert Ulicny</h2>
            <p>Hello, my name is Robert Ulicny, nice to meet you<br/> I would like to welcome you
              with ma persolnal portfolio.
            </p>
          </div>
          <div className='photo-container'>
            <img className='photo' src={photo} alt="me" />
          </div>
        </div>
        
        </header>
       
        <footer className='footer' >
            <div className='footer-box' >
              email: ulicny.robert@gmail.com<br/>
              phone: 0919 406 612
            </div>
            <div className='footer-box' >
              designed by <img className='logo' src={robert} alt="robert" />

            </div>
            <div className='footer-box' >
              address: Bukurestska 26 <br/>
                        Kosice 04013

            </div>

      </footer>
        
   
      </div>
      
      
    </div>
  );
}

export default App;
