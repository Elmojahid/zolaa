import React from "react";
import styled from "styled-components";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";

export default function CreerCompte() {
  return (
    <>
      <TopNavbar />
      <Wrapper>
        <FormContainer>
          <FormBox>
            <Title>🔒 CRÉER UN COMPTE</Title>
            <Form>
              <Label>Nom</Label>
              <Input type="text" placeholder="Votre nom" />
              <Label>Prénom</Label>
              <Input type="text" placeholder="Votre prénom" />
              <Label>Email</Label>
              <Input type="email" placeholder="Votre adresse email" />
              <Label>Mot de passe</Label>
              <Input type="password" placeholder="Créer un mot de passe" />
              <Label>Confirmez le mot de passe</Label>
              <Input type="password" placeholder="Confirmez votre mot de passe" />
              <Button>CRÉER MON COMPTE</Button>
            </Form>
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
  height: calc(100vh - 70px);
  margin-top: 70px;
  background-color: #f9f9f9;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 600px;
`;

const FormBox = styled.div`
  background-color: white;
  border: 2px solid #007bff;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  background-color: #007bff;
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
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
