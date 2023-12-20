import "./App.css";
import { Card } from "./Card";
import onlineStore from "./mobile-shopping.png";

function App(props) {
  return (
    <div className="center">
      <img src={onlineStore} width="10%" />
      <h1>{props.title} </h1>
      <p>welcome to {props.title}</p>
    </div>
  );
}

export default App;
