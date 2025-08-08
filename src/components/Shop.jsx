import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const products = [
{ name: "蒜頭", price: 80 },
{ name: "玉米", price: 30 },
{ name: "花生", price: 55 },
];
export default function Shop() {
const { addToCart } = useContext(CartContext);
return (
<div>
{products.map((p, i) => (
<div key={i}>
{p.name} - ${p.price}
<button onClick={() => addToCart(p)}>加入購物車</button>
</div>
))}
</div>
);
}