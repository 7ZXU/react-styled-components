import React from "react";
import styled from 'styled-components';
import Header from './components/Header';
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DocumentPage from "./pages/DocumentPage"
import TutorialPage from "./pages/TotorialPage"
import BlogPage from "./pages/BlogPage"
import CommunityPage from "./pages/CommunityPage"

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
        <Route exact path="/tutorial" component={TutorialPage}/>
        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/community" component={CommunityPage}/>
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
