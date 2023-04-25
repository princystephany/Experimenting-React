// import logo from './logo.svg';

import './App.css';

import {Sample,Sample2} from './component/Sample.jsx'

import Card from './component/Card.jsx'
 
function App() {

  let name='Princy';

  return (
   <div className='App'>
<h1>
  First React Application
<Sample/>
<Sample2/>
<Card/>

 </h1>
<p>{name}</p>
   </div>  
  );
}
export default App;
