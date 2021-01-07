import Navigation from './Nav/Navigation'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import FAQ from './FAQ/FAQ'
import Contact from './Contact/Contact'
import Apply from './Apply/Apply'
import Error from './Error/Error'
import Dashboard from './Dashboard/Dashboard'

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
      <Navigation />
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/apply" component={Apply} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={Error} />
      </Switch>
      <Footer /> 
      

    </div>
  );
}

export default App;
