import CustomersSay from "../Components/CustomersSay";
import Specials from "../Components/Specials";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div style={{ display: "flex", background: "#495e57" }}>
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="subsection">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <br></br>
          <Link className="action-button" to="/reservations">
            Reserve a table
          </Link>
        </section>
        <section className="hero-image">
          <img
            src={require("../assets/food1.png")}
            alt="Little Lemon restaurant cuisine"
          ></img>
        </section>
      </div>
      <Specials />
      <CustomersSay />
      <article className="about-us">
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="about-subtext">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </section>

        <section className="double-image">
          <img
            className="about-1"
            src={require("../assets/food3.jpeg")}
            alt="Little Lemon restaurant cuisine 1"
          ></img>
          <img
            className="about-2"
            src={require("../assets/food2.jpeg")}
            alt="Little Lemon restaurant cuisine 2"
          ></img>
        </section>
      </article>
    </main>
  );
}

export default Home;
