import React from "react";
import Navbar from "../Navbar/Navbar";
import { useAddToCart } from "../../Provider/AddToCartContext";
import "./CartInside.css";

const CartInside = () => {
  const { cart } = useAddToCart();

  return (
    <>
      <Navbar />
      <div className="cart">
        <table id="shopping-cart-table" className="table">
          <caption>Prodotti nel carrello</caption>
          <thead>
            <tr>
              <th className="col img" scope="col">
                <span>Immagine</span>
              </th>
              <th className="col item" scope="col">
                <span>Oggetto</span>
              </th>
              <th className="col qty" scope="col">
                <span>Qta'</span>
              </th>
              <th className="col price" scope="col">
                <span>Prezzo</span>
              </th>
              <th className="col subtotal" scope="col">
                <span>Subtotale</span>
              </th>
            </tr>
          </thead>

          <tbody className="cart-item">
            <tr className="item-info"></tr>
            {cart.map((pokemon, index) => (
              <>
                <tr key={index}>
                  <td className="col image" style={{ width: "18rem" }}>
                    <img
                      height={200}
                      src={pokemon.images.small}
                      alt={pokemon.name}
                    />
                  </td>

                  <td className="col name"> {pokemon.name}</td>
                  {/*<td className="col qty" data-th="qtà">
                    <div className="field-qty">
                      <div className="control-qty">
                        <label htmlFor={`cart-${index}`}>
                          <input id={`cart-${index}`} type="number" />
                        </label>
                      </div>
                    </div>
                    {pokemon.qty}
                  </td>*/}
                  <td className="col price" data-th="prezzo">
                    <span
                      className="price-including-tax"
                      data-label="tasse incl."
                    >
                      {pokemon.price} €
                    </span>
                  </td>
                  <td className="col subtotal">
                    <span
                      className="price-including-tax"
                      data-label="tasse incl."
                    >
                      {pokemon.subtotal} €
                    </span>
                  </td>
                </tr>

                <tr className="item-actions">
                  <td colSpan={5}>
                    <div className="actions-toolbar">
                      <div
                        id="gift-options-cart-item-3118698"
                        data-bind="scope:'giftOptionsCartItem-3118698'"
                        className="gift-options-cart-item"
                      ></div>
                      <a className="action-edit">
                        <span>Modifica</span>
                      </a>

                      <a className="action-remove">
                        <span>Rimuovi il prodotto</span>
                      </a>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartInside;
