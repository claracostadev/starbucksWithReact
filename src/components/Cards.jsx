import React from "react";
import "../css/cards.css";
import Card1 from "../image/card-1.png";
import Card2 from "../image/card-2.png";
import Card3 from "../image/card-3.png";
import Card4 from "../image/card-4.png";
import Card from "./Card";

const Cards = () => {
  return (
    <section className="cards">
      <Card
        src={Card1}
        title={"Aplicación de "}
        circle={"5%"}
        circle_estado={true}
        description={
          "Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer pedido nunca ha sido tan facil."
        }
      />
      <Card
        src={Card2}
        title={"Delivery "}
        circle={"10%"}
        circle_estado={true}
        description={
            "Starbuks entrega su comida y bebida favorita en la puerta de su casa."
        }
      />
      <Card
        src={Card3}
        title={"Novedades "}
        circle_estado={false}
        description={
          "Mantengase informado de nuestras ultimas novedades y actualizaciones."
        }
      />
      <Card
        src={Card4}
        title={"Historias de "}
        circle_estado={false}
        description={
          "Descrubra nuestra empresa y nuestra historia."
        }
      />
    </section>
  );
};
export default Cards;
