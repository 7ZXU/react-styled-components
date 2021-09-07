import React from "react";
import styled from 'styled-components';
import Content from "./components/Content";
import Header from './components/Header';
import Main from './components/Main';
import ScrollBar from "./components/ScrollBar";
import Footer from "./components/Footer";
import Editor from "./components/Editor";

const AppWrap = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
`;

const Body = styled.div`
display: flex;
flex-direction: column;
justify-direction: center;
font-family: 'Spoqa Han Sans Neo';
align-items: center;
width: 90%;
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

width: 100%;
color: rgb(236, 236, 236);
border-top: none;
border-left: none;
border-right: none;


`;



function App() {
  return (
    <AppWrap>   
      <Header/>
      <Main/>
      <Body>  
        <ScrollBar/>
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
      <Footer/>

    </AppWrap>
    
  );
}

export default App;
