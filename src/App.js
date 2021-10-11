import './App.css';
import Home from './Home'
import Aboutus from './Components/Aboutus'
import Courses from './Components/Courses'
import Services from './Components/Services'
import Certificate from './Components/Certificate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavbarComp from './Components/NavbarComp'
import Chatting from './Components/Chatting'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Error404 from './Components/Error404';

function App() {
  return (
    <Router>
      <Header />
      <NavbarComp />
      <Switch>
        <Route path="/about" exact component={Aboutus} />
        <Route path="/" exact component={Home} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/services" exact component={Services} />
        <Route path="/certificate" exact component={Certificate} />
        <Route path="*" component={Error404} />
      </Switch>
      <Chatting />
      <Footer />
    </Router>
  );
}

export default App;
