import { CartProvider } from "./context/CartContext";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
function App() {
return (
<CartProvider>
<h1>吳家農場</h1>
<Shop />
<Cart />
</CartProvider>
);
}
export default App;