import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
export default function Cart() {
const { cart, clearCart } = useContext(CartContext);
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [sent, setSent] = useState(false);
const handleSubmit = async () => {
if (!name || !phone) return alert("請填姓名與電話");
await axios.post("http://localhost:3001/order", {
name,
phone,
cart,
});
clearCart();
setSent(true);
};
if (sent) return <p>✅ 訂單已送出</p>;
return (
<div>
<h2>🛒 購物車</h2>
{cart.map((item, i) => (
<div key={i}>{item.name} - ${item.price}</div>
))}
<input value={name} onChange={(e) => setName(e.target.value)} placeholder="姓名" />
<input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="電話" />
<button onClick={handleSubmit}>送出訂單</button>
</div>
);
}