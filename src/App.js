
import './App.css';
import Footer from './components/common/footer';
import Header from './components/common/header';
import TapOptions from './components/common/tabOptions';

function App() {
  return (
 <>
 <Header/>
 <TapOptions/>
 {/* Diff screens  bases on TapOptions*/}
 <Footer/>
 
 
 </>
  )
}

export default App;
