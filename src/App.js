
import './App.css';
import Footer from './components/Footer/Footer';
//import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs';
import Process from './components/Process/Process';
import Testimonial from './components/Testimonials/Testimonial';
import Employees from './components/Employees/Employees';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Tnav from './components/Tnav/Tnav';

function App() {
  return (
    <Router className="App">
      {/*<NavBar />*/}
      <Tnav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/process' component={Process} />
        <Route path='/testimonials' component={Testimonial} />
        <Route path='/employees' component={Employees} />
        <Route path='/projects' component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
