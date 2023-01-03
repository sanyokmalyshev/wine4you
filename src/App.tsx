import './App.scss';
import 'scss/blocks/link.scss';
import 'scss/blocks/icon.scss';
import 'scss/blocks/page.scss';
import 'scss/blocks/button.scss';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
// import Nav from 'components/Nav/Nav';
import { Footer } from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { store } from 'app/store';

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
        <Header />
        {/* <Nav /> */}
        <main className="page">
          <Outlet />
        </main>
        <Footer />
      {/* </Provider> */}
    </>
  );
}

export default App;
