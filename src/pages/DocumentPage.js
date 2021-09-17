import React from "react";
import styled from 'styled-components';
import Content from "../components/Content";

const Title = styled.h1`
  margin-top: 80px;
  font-size: 60px;
  font-weight: 700;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  padding-left: 20px;
  padding-right: 20px;

`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width:80%;

`;

function DocumentPage() {
    return (
        <Body>
            <Section>
                <Title>시작하기</Title>
                <Content/>
            </Section>





        </Body>

    )
}

export default DocumentPage;