import React from "react";
import { Button } from "reactstrap";

const Section = () => {
  return (
    <section className="all-section">
      <div>
        <h1 className="subtitle">
          A cultura da cerveja. Desde 2004 levando a verdadeira qualidade da
          cerveja artesanal até você.
        </h1>
      </div>
      <div className="signup">
        <div className="promotitle">
          <h4 className="size">
            CADASTRE-SE E RECEBA PROMOÇÕES REFERENTES A NOSSOS PRODUTOS.
          </h4>
        </div>
        <div className="inputs">
          <input className="putmail" placeholder="DIGITE SEU E-MAIL" />
          <Button className="btn" color="secondary" size="lg">
            CADASTRAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section;
