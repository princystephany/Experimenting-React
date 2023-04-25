// import logo from './logo.svg';
import './App.css';
import Sample from './component/Sample.jsx'

function App() {

  let name='Princy';

  return (
   <div className='App'>
<h1>
  First React Application
<Sample/>

</h1>
<p>{name}</p>
   </div>  
  );
}

export default App;
