// import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals);
  }, [cartItems, dispatch]);

  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <Header />

      <main>
        <CartContainer />
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}

export default App;
