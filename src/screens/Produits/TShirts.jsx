import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer";
import TopNavbar from "../../components/Nav/TopNavbar";
import CategoryBox from "../../components/Elements/CategoryBox";
import FullButton from "../../components/Buttons/FullButton";

// Assets
import TshirtBasicImg from "../../assets/img/tshirts/basic.png";
import TshirtPremiumImg from "../../assets/img/tshirts/premium.png";

export default function Tshirts() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">T-Shirts</h1>
              <p className="font13">Explorez notre collection de t-shirts personnalisés.</p>
            </HeaderInfo>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <CategoryBox
                  img={TshirtBasicImg}
                  title="Basic"
                  text="Des t-shirts simples et confortables pour un usage quotidien."
                  action={() => navigate("/tshirts/basic")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <CategoryBox
                  img={TshirtPremiumImg}
                  title="Premium"
                  text="Des t-shirts de qualité supérieure pour un style unique."
                  action={() => navigate("/tshirts/premium")}
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