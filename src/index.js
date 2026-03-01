import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//All Date Stror AS Array
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//App Commponent Here
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header Component Here
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

//Menu Compenent Here
function Menu() {
  const numPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <React.Fragment>
          <p className="pizza">
            Authentic Italian cuisine.6 Creative dishes to choose from.All from
            our stone oven,all oraganic,all Delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((PizzaElement) => (
              <Pizza pizzaObject={PizzaElement} key={PizzaElement.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We 're Still working on our menu. Please come back latter:) </p>
      )}
    </main>
  );
}

//Pizza Commponent Here
function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>
          {pizzaObject.soldOut ? (
            <span>SOLD OUT </span>
          ) : (
            <span>pizzaObject.price</span>
          )}
        </span>
      </div>
    </li>
  );
}

//Footer Component here
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//All Commponnet Render Here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
