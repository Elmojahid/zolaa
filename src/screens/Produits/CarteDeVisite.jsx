import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer"; // Chemin corrigé
import TopNavbar from "../../components/Nav/TopNavbar"; // Chemin corrigé
import CategoryBox from "../../components/Elements/CategoryBox"; // Chemin corrigé
import FullButton from "../../components/Buttons/FullButton"; // Chemin corrigé

// Assets
import CarteProImg from "../../assets/img/cards/professional.png";
import CarteLuxeImg from "../../assets/img/cards/luxury.png";
import CarteEcoImg from "../../assets/img/cards/economical.png";
import CartePersonnalisableImg from "../../assets/img/cards/customizable.png";

export default function CarteDeVisite() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Cartes de Visite</h1>
              <p className="font13">
                Explorez nos différentes catégories de cartes de visite adaptées à tous vos besoins.
              </p>
            </HeaderInfo>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={CarteProImg}
                  title="Professionnelles"
                  text="Des cartes de visite élégantes et classiques, parfaites pour une image professionnelle."
                  action={() => navigate("/carte-de-visite/professionnelles")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={CarteLuxeImg}
                  title="De Luxe"
                  text="Des cartes de visite haut de gamme pour une impression durable."
                  action={() => navigate("/carte-de-visite/luxe")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={CarteEcoImg}
                  title="Économiques"
                  text="Des cartes de visite abordables sans compromis sur la qualité."
                  action={() => navigate("/carte-de-visite/economiques")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={CartePersonnalisableImg}
                  title="Personnalisables"
                  text="Créez votre propre design pour une carte de visite unique."
                  action={() => navigate("/carte-de-visite/personnalisables")}
                />
              </div>
            </div>
            <div className="row flexCenter">
              <div style={{ margin: "50px 0", width: "200px" }}>
                <FullButton title="Retour" action={() => navigate("/")} />
              </div>
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
}

// Styles

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Assure que la page occupe toute la hauteur de l'écran */
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 70px; /* Compense la hauteur du TopNavbar pour éviter qu'il cache le contenu */
  padding: 20px; /* Ajoute un léger padding pour que le contenu ne soit pas collé */
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 860px) {
    text-align: center;
  }
`;