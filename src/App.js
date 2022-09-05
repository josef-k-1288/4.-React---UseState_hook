/*
  useState hook je posebna funkcija koja omogućava da se zakacimo na React funkcije. 
  useState je hook koja vam omogućava da dodamo React stanje komponentama funkcije

  koristi se kada:
  na primer: napišemo komponentu funkcije i shvatimo da moramo da joj dodamo neko stanje, 
  prethodno smo morali da je konvertujemo u klasu. 
  Sada možemo koristiti Hook unutar postojeće komponente funkcije

*/


import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
