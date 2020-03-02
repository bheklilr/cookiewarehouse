import React from "react";
import "./styles.css";
import COOKIES from "../../config/cookies";
import PRICE from "../../config/price";
import { useState } from "react";

export default function NewOrder(props) {
  const [customer, setCustomer] = useState();
  const [contact, setContact] = useState();
  const [location, setLocation] = useState();

  const [cookieCounts, setCookieCounts] = useState(
    COOKIES.map(cookie => ({
      name: cookie.name,
      count: 0
    }))
  );
  const totalCount = cookieCounts.reduce(
    (count, cookie) => count + cookie.count,
    0
  );

  const orderReady =
    customer &&
    contact &&
    totalCount > 0;

  const updateCookieCount = (cookie, newCount) => {
    setCookieCounts(
      cookieCounts.map($cookie => ({
        name: $cookie.name,
        count: cookie.name === $cookie.name ? newCount : $cookie.count
      }))
    );
  };

  return (
    <div className="new-order">
      <h1>Create a new order</h1>
      <div className="new-order-inputs">
        <input
          className="text-input"
          type="text"
          placeholder="Customer"
          onChange={e => setCustomer(e.target.value.trim())}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Contact"
          onChange={e => setContact(e.target.value.trim())}
        />
        <input
          className="text-input"
          type="text"
          placeholder={`Location (e.g. "Dad's work")`}
          onChange={e => setLocation(e.target.value.trim())}
        />
        {COOKIES.map(cookie => (
          <CookieCounter cookie={cookie} onChange={updateCookieCount} />
        ))}
      </div>
      <h2 className="new-order-total">Total: ${totalCount * PRICE}</h2>
      <div className="new-order-options">
        <label className="checkbox">
          <span>Online?</span>
          <input className="checkbox-input" type="checkbox" />
        </label>
        <label className="checkbox">
          <span>Shipped?</span>
          <input className="checkbox-input" type="checkbox" />
        </label>
      </div>
      <button className="create-new-order" disabled={!orderReady}>
        Create
      </button>
    </div>
  );
}

function useLongClick(onLongClick, timeout = 1000) {
  const [timer, setTimer] = useState();

  const onDown = () => {
    console.log("Starting timer");
    setTimer(
      window.setTimeout(() => {
        onLongClick();
        setTimer(undefined);
      }, timeout)
    );
  };

  const onUp = () => {
    if (timer) {
      console.log("Clearing timer");
      window.clearTimeout(timer);
      setTimer(undefined);
    }
  };

  return {
    onMouseDown: onDown,
    onTouchStart: onDown,
    onMouseUp: onUp,
    onTouchEnd: onUp,
    onMouseLeave: onUp
  };
}

function CookieCounter({ cookie, onChange }) {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(current => {
      const newCount = Math.max(current - 1, 0);
      onChange(cookie, newCount);
      return newCount;
    });
  };
  const increment = () => {
    setCount(current => {
      const newCount = current + 1;
      onChange(cookie, newCount);
      return newCount;
    });
  };

  const clearHandlers = useLongClick(() => {
    setCount(0);
    onChange(cookie, 0);
  });

  return (
    <div className="cookie-counter">
      <button className="icon-button" onClick={decrement}>
        -
      </button>
      <span
        className="cookie-counter-text"
        style={{ backgroundColor: cookie.color }}
        {...clearHandlers}
      >
        {count} {count === 1 ? cookie.name : cookie.plural}
      </span>
      <button className="icon-button" onClick={increment}>
        +
      </button>
    </div>
  );
}
