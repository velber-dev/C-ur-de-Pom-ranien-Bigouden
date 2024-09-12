import './gallery.scss';

import React from 'react';

import useImageSize from '../../hooks/useImageSize';

function Image({url, height, setRef}: {
    url: string,
    height: number,
    setRef?: React.RefObject<HTMLDivElement>
}) {
    return (
        <div className="gallery__image-wp" ref={setRef}>
            <img className="gallery__image" style={{'height': `${height}px`}} src={url} />
        </div>
    )
}

function getImageUrl(id: number) {
    return `${process.env.PUBLIC_URL}/assets/img/gallery-image${id}.jpg`;
}

function Gallery({ setRef }: {
    setRef: React.RefObject<HTMLElement>
}) {
    const {imageSize, imageRef} = useImageSize();

    return (
        <section className="gallery" ref={setRef}>
            <div className="gallery__container container">
                <div className="gallery__grid">
                    <div className="gallery__column">
                        <Image url={getImageUrl(1)} height={imageSize} setRef={imageRef} />
                        <Image url={getImageUrl(2)} height={imageSize} />
                        <Image url={getImageUrl(3)} height={imageSize} />
                        <Image url={getImageUrl(4)} height={imageSize} />
                        <Image url={getImageUrl(5)} height={imageSize} />
                        <Image url={getImageUrl(6)} height={imageSize} />
                        <Image url={getImageUrl(7)} height={imageSize} />
                        <Image url={getImageUrl(8)} height={imageSize} />
                        <Image url={getImageUrl(9)} height={imageSize} />
                        <Image url={getImageUrl(10)} height={imageSize} />
                    </div>
                    <div className="gallery__column">
                        <Image url={getImageUrl(11)} height={imageSize} />
                        <Image url={getImageUrl(12)} height={imageSize} />
                        <Image url={getImageUrl(13)} height={imageSize} />
                        <Image url={getImageUrl(14)} height={imageSize} />
                        <Image url={getImageUrl(15)} height={imageSize} />
                        <Image url={getImageUrl(16)} height={imageSize} />
                        <Image url={getImageUrl(17)} height={imageSize} />
                        <Image url={getImageUrl(18)} height={imageSize} />
                        <Image url={getImageUrl(19)} height={imageSize} />
                        <Image url={getImageUrl(20)} height={imageSize} />
                    </div>
                </div>

                <div className="gallery__more">
                    <a className="gallery__button-link" href="https://www.instagram.com/coeur_de_pomeranian" target="_blank">
                        <button className="gallery__button button">
                            <strong className="button__text">Voir plus de photos</strong>
                        </button>
                    </a>
                    <p className="gallery__more-text">
                        Vous voulez voir plus de photos?<br />
                        Allez sur notre page Instagram
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Gallery;