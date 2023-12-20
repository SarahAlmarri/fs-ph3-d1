export const products = [
  {
    name: "Pull & Bear Hoodie",
    price: "22kd",
    image:
      "https://static.pullandbear.net/2/photos//2023/V/0/2/p/4597/722/711/4597722711_2_6_8.jpg?t=1677177259131&imwidth=1125",
  },
  {
    name: "ESSENTIASLS Hoodie",
    price: "24kd",
    image:
      "https://leerdo.com/cdn/shop/products/January20211417_970x_28b0384e-d1fa-480a-8ecb-91a2d115a657.jpg?v=1660532761",
  },
];
export function Products(props) {
  return (
    <div
      className="d-flex align-items-center m-5 flex-column p-4"
      style={{ background: "#fff6cc" }}
    >
      <img src={props.image} width="170px" height="180px" />
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
    </div>
  );
}
