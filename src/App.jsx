import { useState } from "react";

import { Header } from "@components/layout";
import { Meals } from "@components/meals";
import { Cart } from "@components/cart";

import { CartContextProvider } from "@store/Cart";

const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
};

export default App;
