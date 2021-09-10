import React from "react";
import styled from 'styled-components';
import Header from './components/Header';
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DocumentPage from "./pages/DocumentPage"

const AppWrap = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
`;


function App() {
  return (
    <AppWrap>   
      <Header/>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/document" component={DocumentPage}/>
        {/* <Main/>
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

        </Body> */}
      </Switch>
      <Footer/>

    </AppWrap>
    
  );
}

export default App;
