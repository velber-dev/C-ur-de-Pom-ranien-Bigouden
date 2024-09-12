import "./hero.scss";
import useImageSize from "../../hooks/useImageSize";
import Btn from "../popUp/PopUp";

function Hero() {
  const { imageSize, imageRef } = useImageSize(0.93);

  return (
    <>
      <section className="hero">
        <div className="hero__container container">
          <div className="hero__text text-wp--padding">
            <h6 className="hero__subtitle">Chenil de Spitz Poméranien</h6>
            <h1 className="hero__title">
              Cœur de <br />
              Poméranien <br />
              Bigouden
            </h1>
            <p className="hero__description">Nos Loulous de Pomeranie vous combleront de bonheur!</p>
            <ul className="hero__list">
              <li className="hero__item">
                <p className="hero__item-text">La santé et les soins passent avant tout</p>
              </li>
              <li className="hero__item">
                <p className="hero__item-text">Couleurs variées</p>
              </li>
              <li className="hero__item">
                <p className="hero__item-text">Livraison dans toute la France</p>
              </li>
            </ul>
            <Btn clazz="hero__button" />
          </div>
          <div className="hero__image-wp" ref={imageRef} style={{ height: `${imageSize}px` }}>
            <img className="hero__image" src={`${process.env.PUBLIC_URL}/assets/img/hero__image.jpg`} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
