import "./App.css";
import onlineStore from "./carts.png";
import { Products, products } from "./Products";

function App() {
  return (
    <div>
      <div
        className="d-flex align-items-center pt-4 pb-4 flex-column"
        style={{ background: "#a3cef1" }}
      >
        <h1>Sarah's Store</h1>
        <img src={onlineStore} width="10%" />
        <h2>welcome to Sarah's Store</h2>
      </div>
      <div className="d-flex justify-content-center gap-5">
        {products.map((item) => (
          <Products
            name={item.name}
            image={item.image}
            price={item.price}
          ></Products>
        ))}
      </div>
    </div>
  );
}

export default App;
