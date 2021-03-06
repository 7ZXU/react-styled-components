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
flex-direction: column;
font-family: 'Spoqa Han Sans Neo';
padding-left: 20px;
padding-right: 20px;

`;

function CommunityPage(){
    return(
        <Body>
            <Title>Where To Get Support</Title>
            <Content/>
        </Body>

    )
}

export default CommunityPage;