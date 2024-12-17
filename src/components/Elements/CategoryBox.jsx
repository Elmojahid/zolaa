import React from "react";
import styled from "styled-components";

const CategoryBox = ({ img, title, text, action }) => {
  return (
    <Box onClick={action}>
      <ImageWrapper>
        <img src={img} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Description>{text}</Description>
    </Box>
  );
};

const Box = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

export default CategoryBox;