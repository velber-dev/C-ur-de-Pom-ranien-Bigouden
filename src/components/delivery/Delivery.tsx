import "./delivery.scss";

import React from "react";

import Btn from "../popUp/PopUp";

function Delivery({ setRef }: { setRef: React.RefObject<HTMLElement> }) {
  const DeliveryInfo = ({ children }: { children: string | (string | JSX.Element)[] }) => (
    <li className="delivery__item">
      <p>{children}</p>
    </li>
  );

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22336.931742820547!2d-4.304875173130581!3d47.81415028707499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4817310399e967a1%3A0xbad9742e47c41714!2sC%C5%93ur%20de%20Pom%C3%A9ranien%20Bigouden!5e0!3m2!1sen!2sfr!4v1725710586499!5m2!1sen!2sfr";

  return (
    <section className="delivery" ref={setRef}>
      <div className="container">
        <div className="delivery__general">
          <iframe
            className="delivery__map"
            src={mapUrl}
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="delivery__text text-wp--padding">
            <h2 className="delivery__title">Comment ce passe l'adoption?</h2>
            <ul className="delivery__list">
              <DeliveryInfo>
                Nous sommes situés en <b>Bretagne</b> et livrons chiots dans la plupart des villes accessibles en voiture.
              </DeliveryInfo>

              <DeliveryInfo>
                Nous préférons recevoir les futurs propriétaires a la maison pour une plus grande confiance de l acheteur.
              </DeliveryInfo>
            </ul>
          </div>
        </div>

        <div className="delivery__get-in-touch">
          <Btn clazz="delivery__button" />
        </div>
      </div>
    </section>
  );
}

export default Delivery;
