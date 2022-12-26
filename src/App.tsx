import './App.scss';
import 'scss/blocks/link.scss';
import 'scss/blocks/icon.scss';
import 'scss/blocks/page.scss';
import 'scss/blocks/button.scss';
import Header from './components/Header/Header';
// import Nav from 'components/Nav/Nav';
import { Footer } from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <main className="page">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
