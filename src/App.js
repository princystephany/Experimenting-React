// import logo from './logo.svg';
import './App.css';
import {Sample,Sample2} from './component/Sample.jsx'
import Mobiles from './component/Mobile.jsx'

function App() {

  let name='Princy';

  return (
   <div className='App'>
<h1>
  First React Application
<Sample/>
<Sample2/>
<Mobiles/>
</h1>
<p>{name}</p>
   </div>  
  );
}

export default App;
