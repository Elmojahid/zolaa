import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importation des icônes de flèches
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 1000, // Ajusté pour un effet plus fluide
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Active les flèches de navigation
    nextArrow: <NextArrow />, // Icône pour la flèche droite
    prevArrow: <PrevArrow />, // Icône pour la flèche gauche
    autoplay: true, // Ajout pour un défilement automatique
    autoplaySpeed: 3000, // Temps de pause entre les changements
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Zola Design offre un service réactif et de qualité. Leur capacité à répondre à nos besoins avec des solutions sur mesure a été un atout pour nos projets."
            author="Fatima Zahra El Ghaouti"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Zola Design a transformé notre approche de l'impression avec une qualité exceptionnelle et des délais toujours respectés. Un partenaire de confiance."
            author="Ahmed Benassi"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Une impression de qualité, rapide et précise. Zola Design a surpassé nos attentes à chaque étape du projet."
            author="Imane Lahlou"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Un service impeccable et des impressions de haute qualité. Zola Design a été un partenaire essentiel pour nos projets"
            author="Yassine Amrani"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Zola Design offre une réactivité et une précision remarquables. Chaque commande est traitée avec soin et professionnalisme."
            author="Samira Boudiaf"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Une expérience de travail fluide et des résultats toujours au top. Zola Design répond à toutes nos attentes."
            author="Rachid Mounir"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :focus-visible {
    outline: none;
    border: 0px;
  }

  /* Animation to simulate cassette-like transition */
  .slick-slide {
    transition: transform 1s ease;
  }

  .slick-track {
    display: flex;
    transition: transform 1s ease-in-out;
  }

  .slick-prev, .slick-next {
    display: block; /* Affiche les flèches */
    font-size: 30px;
    color: #a78b24; /* Couleur des flèches */
    background-color: rgba(255, 255, 255, 0.7); /* Fond légèrement transparent */
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  .slick-prev {
    left: 10px; /* Position de la flèche gauche */
  }

  .slick-next {
    right: 10px; /* Position de la flèche droite */
  }

  .slick-prev:hover, .slick-next:hover {
    background-color: rgba(255, 255, 255, 1); /* Couleur au survol */
  }
`;

const PrevArrow = () => (
  <div className="slick-prev">
    <FaArrowLeft />
  </div>
);

const NextArrow = () => (
  <div className="slick-next">
    <FaArrowRight />
  </div>
);
