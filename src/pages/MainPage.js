import React from "react";
import styled from 'styled-components';
import Content from "../components/Content";
import Main from '../components/Main';
import ScrollBar from "../components/ScrollBar";
import Editor from "../components/Editor";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-direction: center;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 778px){
    flex-direction: column;
    align-items: center;
    }

`;

const Line = styled.hr`

    width: 90%;
    color: rgb(236, 236, 236);
    border-top: none;
    border-left: none;
    border-right: none;

`;

const ScrollWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 778px) {
        justify-content: flex-start;
    }

`;



function MainPage() {
  return (
    <div>
        <Main/>

        <ScrollWrap> 
            <ScrollBar/>
        </ScrollWrap> 

        <Body>
            <Line/> 
            <ContentWrap>
                <Content/>
                <Editor/>
            </ContentWrap>

            <ContentWrap>
                <Content/>
                <Editor/>
            </ContentWrap>

        </Body>
    </div>
  );
}

export default MainPage;
