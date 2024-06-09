import styled from "styled-components";

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    transition: 0.4s background ease in;


    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.3s background ease in;
    }
`;

