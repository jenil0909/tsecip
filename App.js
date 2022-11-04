
import './App.css';
import { Header } from './Header';
import ChannelState from './ChannelState';
import Form from './Form';
import Loki from './Loki.js';
import EventF from './EventF';


function App() {
  return (
    <div className="App">
     <Header txt ="NAME" last="laludi">
      <h2>YE anujiya nani ma na khel na dekhad</h2>
     </Header>
     <Header txt = "JIN" />
     <ChannelState />
     <p id="jin">hin</p>
     <Loki>
    
     </Loki>
     <EventF name = "JIgudi">

     </EventF>
      <Form>
        <label>
        UserName 
        </label>
      </Form>
    </div>
  );
}

export default App;
