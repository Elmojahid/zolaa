import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import styled from "styled-components";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <br />
      <IntroSection className="container shadow radius8">
        <h2 className="font25 extraBold purpleColor textCenter">
          Zola Design est une imprimerie 100% digitale
        </h2>
        <p className="font15 regular textCenter darkColor">
          Fruit de l’expérience et de la modernité, Zola Design a réuni le meilleur de l’impression et du web.
          Nous bénéficions d’un savoir-faire unique de professionnels de la digitalisation, ainsi que de la chaîne
          graphique et de l’impression offset et numérique. Chez Zola Design, tout a été repensé pour en faire une
          imprimerie comme vous n’en avez jamais vue ! Nous sommes en effet équipés des dernières technologies en
          matière d’impression et d’automatisation de la production.
        </p>
      </IntroSection>

      <AdvantagesSection className="container">
        <AdvantageCard>
          <Icon>📄</Icon>
          <h3 className="font20 extraBold darkColor">Vos Prints en 3 clics !</h3>
          <p className="font15 regular darkColor">
            Gérez vos impressions en ligne en quelques clics : c’est facile, rapide et notre interface est conçue pour être très simple d’utilisation et ultra performante.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <Icon>📜</Icon>
          <h3 className="font20 extraBold darkColor">Des papiers choisis pour vous !</h3>
          <p className="font15 regular darkColor">
            Nous vous proposons les formats et papiers les plus utilisés par l’ensemble des clients, particuliers ou professionnels. Vos créations trouveront le modèle qu’il leur faut pour un rendu parfait.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <Icon>⏱️</Icon>
          <h3 className="font20 extraBold darkColor">Print Ultra Rapide !</h3>
          <p className="font15 regular darkColor">
            Grâce aux dernières technologies, nos processus de production sont automatisés et garantissent une impression ultra rapide de vos travaux sans perte de qualité.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <Icon>🚚</Icon>
          <h3 className="font20 extraBold darkColor">Livraison Express !</h3>
          <p className="font15 regular darkColor">
            Nous livrons dans tout le Maroc ! En 24h pour les plus grandes villes et entre 48 à 72h pour le reste du Royaume.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <Icon>🌟</Icon>
          <h3 className="font20 extraBold darkColor">Qualité au Top !</h3>
          <p className="font15 regular darkColor">
            Notre exigence de qualité est basée sur des standards internationaux. Imprimer avec Zola Design c’est la garantie de recevoir de magnifiques impressions à chacune de vos commandes.
          </p>
        </AdvantageCard>

        <AdvantageCard>
          <Icon>📞</Icon>
          <h3 className="font20 extraBold darkColor">Service client incroyable !</h3>
          <p className="font15 regular darkColor">
            Faites confiance à notre Service Client pour vous guider. Ils seront à vos petits soins pour répondre à toutes vos questions et feront tout pour vous accompagner.
          </p>
        </AdvantageCard>
      </AdvantagesSection>

      <Contact />
      <Footer />
    </>
  );
}

const IntroSection = styled.section`
  padding: 40px 20px;
  margin: 40px auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 11px rgba(111, 95, 26, 0.5);
  text-align: center;
`;

const AdvantagesSection = styled.section`
  display: grid;
  gap: 20px;
  margin: 40px auto;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 11px rgba(111, 95, 26, 0.5);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const AdvantageCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #a78b24;
`;
