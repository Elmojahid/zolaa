import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";

export default function Authentification() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <Wrapper>
        <FormContainer>
          {/* Formulaire de connexion */}
          <FormBox>
            <Title>🔒 OUVERTURE DE SESSION</Title>
            <Form>
              <Label>Email ou nom d'utilisateur</Label>
              <Input type="text" placeholder="Email ou nom d’utilisateur" />
              <Label>Mot de passe</Label>
              <Input type="password" placeholder="Mot de passe" />
              <Button>CONNEXION</Button>
              <ForgotPassword>Mot de passe oublié ?</ForgotPassword>
            </Form>
          </FormBox>

          {/* Création de compte */}
          <FormBox>
            <Title>🔒 CRÉEZ VOTRE COMPTE</Title>
            <AccountCreation>
              Créez votre compte sur weprint.ma en cliquant ici
              <CreateButton onClick={() => navigate("/creer-compte")}>
                CRÉER UN COMPTE
              </CreateButton>
            </AccountCreation>
          </FormBox>
        </FormContainer>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px); /* Ajusté pour exclure la navbar */
  margin-top: 70px; /* Décalage pour éviter le chevauchement par la navbar */
  background-color: #f9f9f9;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1000px;
`;

const FormBox = styled.div`
  background-color: white;
  border: 2px solid #007bff; /* Couleur unifiée */
  border-radius: 8px;
  padding: 30px;
  width: 45%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  background-color: #007bff; /* Couleur principale */
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff; /* Couleur principale */
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; /* Teinte plus sombre */
  }
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  color: #007bff;
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const AccountCreation = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
`;

const CreateButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;
