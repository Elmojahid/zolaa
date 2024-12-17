import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer";
import TopNavbar from "../../components/Nav/TopNavbar";
import CategoryBox from "../../components/Elements/CategoryBox";
import FullButton from "../../components/Buttons/FullButton";

// Assets
import DepliantTriImg from "../../assets/img/flyers/tri_fold.png";
import DepliantBiImg from "../../assets/img/flyers/bi_fold.png";
import DepliantZImg from "../../assets/img/flyers/z_fold.png";
import DepliantCustomImg from "../../assets/img/flyers/customizable.png";

export default function Depliants() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Dépliants</h1>
              <p className="font13">
                Découvrez nos différents types de dépliants conçus pour répondre à vos besoins marketing et publicitaires.
              </p>
            </HeaderInfo>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg}
                  title="Tri-Volets"
                  text="Des dépliants tri-volets pour un maximum d'informations dans un format compact."
                  action={() => navigate("/depliants/tri-volets")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={DepliantBiImg}
                  title="Bi-Volets"
                  text="Des dépliants bi-volets simples et efficaces pour vos campagnes publicitaires."
                  action={() => navigate("/depliants/bi-volets")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={DepliantZImg}
                  title="Z-Fold"
                  text="Des dépliants Z-fold modernes pour une présentation dynamique de vos services."
                  action={() => navigate("/depliants/z-fold")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={DepliantCustomImg}
                  title="Personnalisables"
                  text="Créez vos propres dépliants pour une communication unique et impactante."
                  action={() => navigate("/depliants/personnalisables")}
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
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 70px; /* Décalage pour éviter le chevauchement par la navbar */
  padding: 20px;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 860px) {
    text-align: center;
  }
`;