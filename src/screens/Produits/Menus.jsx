import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer";
import TopNavbar from "../../components/Nav/TopNavbar";
import CategoryBox from "../../components/Elements/CategoryBox";
import FullButton from "../../components/Buttons/FullButton";

// Assets
import MenuProImg from "../../assets/img/menus/professional.png";
import MenuEcoImg from "../../assets/img/menus/economical.png";

export default function Menus() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Menus</h1>
              <p className="font13">Découvrez nos menus adaptés pour tous vos besoins professionnels.</p>
            </HeaderInfo>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <CategoryBox
                  img={MenuProImg}
                  title="Professionnels"
                  text="Des menus élégants pour une présentation professionnelle de vos offres."
                  action={() => navigate("/menus/professionnels")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <CategoryBox
                  img={MenuEcoImg}
                  title="Économiques"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
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
  margin-top: 70px;
  padding: 20px;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 860px) {
    text-align: center;
  }
`;