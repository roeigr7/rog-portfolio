import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/shared/Hero';
import Footer from '../components/shared/Footer';
import NavBar from '../components/shared/NavBar';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Hero />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
