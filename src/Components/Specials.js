import { Link } from "react-router-dom";


export default function Specials() {
  const menuList = [
    {
      name: "Greek Salad",
      price: 12.99,
      text: "Refreshing salad made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper and olive oil.",
      img: "../assets/food1.png"
    },
    {
      name: "Bruschetta",
      price: 17.89,
      text: "Toasted bread, topped with tomatos and cheese. Seasonsed with salt and olive oil.",
      img: "../assets/bruschetta.jpeg",
    },
    {
      name: "Lemon Dessert",
      price: 23,
      text: "Freshly baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
      img: "../assets/lemon-dessert.webp",
    },
  ];

  return (
    <div className="specials">
      <h1>This Week's Specials</h1>
      <a
        className="action-button"
        href={require("../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >
        Online Menu
      </a>
      <ul>
        {menuList.map((item, index) => (
          <li key={index}>
            <div className="specials-card">
             <img src={require("../assets/food4.webp")} />
              <div className="specials-card-content">
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
                <p>{item.text}</p>
                <Link className="button" to="/order">
                  Order for Delivery
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
