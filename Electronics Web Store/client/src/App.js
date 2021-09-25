
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Getting the components
import Header from './components/header/Header'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'
import  ContextProvider  from './context/ContextProvider'
import { TemplateProvider } from './templates/TemplateProvider'
import DetailView from './components/product/DetialView'


function App() {
  return (
    <TemplateProvider>
      <ContextProvider>


      
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path="/product/:id" component={DetailView}/>
        </Switch>
        
      </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
