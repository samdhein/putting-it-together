import logo from './logo.svg';
import './App.css';
import NameCard from './components/namecard'

function App() {
  return (
    <div className="App">
      <NameCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <NameCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <NameCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <NameCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
