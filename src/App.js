// import logo from './logo.svg';

import './App.css';

import {Sample,Sample2} from './component/Sample.jsx'

import Card from './component/Card.jsx'

import image from './images/Nokia.jpg'
 
function App() {

  let name='Princy';

  return (
   <div className='App'>
<h1>
  First React Application
<Sample/>
<Sample2/>
<Card brandimage={image} brandname="Samsung" brandprice="14,000"></Card>
<Card brandname="Vivo" brandprice="14,000"></Card>
<Card brandname="Iphone" brandprice="14,000"></Card>
<Card brandname="Poco" brandprice="14,000"></Card>
<Card brandname="Moto" brandprice="14,000"></Card>

 </h1>
<p>{name}</p>
   </div>  
  );
}
export default App;
