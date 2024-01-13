import './App.css';
import Addproduct from './Addproduct';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Signuppage from './Signup';
import Login from './Login';
import Products from './Product';
import Productstwo from './Productwo';
import ContactUs from './Contacts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Addproduct/>
      <Routes>
        <Route element={<Products/>}>
      <Route path='/' element={<Productstwo/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/logout' element={<Login/>}/>
      </Route>
      
      <Route path='/signup' element={<Signuppage/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
