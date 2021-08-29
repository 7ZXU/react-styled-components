import React from "react";
import styled from 'styled-components';
import Logo from './assets/logo192.png';
import Background from './assets/react-background.png';

const Body = styled.div`
display: flex;
flex-direction: column;
justify-direction: flex-start;


`;

const Header = styled.div`
background-color: #20232a;
color: #ffffff;
position: fixed;
z-index: 1;
width: 100%;
top: 0;
left: 0;
height: 30px;
padding-left: 20px;
padding-right: 20px;
margin-left: auto;
margin-right: auto;
`;

const Menu = styled.div`
display: flex;
align-itmens: center;
flex-direction: row;
height=30px;

`;

const Icon = styled.img`
height: 20px;
`;

const Nav = styled.nav`
font-size: 18px;
display: flex;
justify-content: center;
`;

const MenuText = styled.div`
padding-left: 15px;
padding-right: 15px;
font-weight: 300;
font-color: white;

`;

const Main = styled.div`
padding-top: 30px;
display: flex;
flex-direction: column;
background-image: url(${(props) => props.bg});
background-size: cover;
color: #ffffff;
width: 100%;
padding-bottom: 10px;
align-items : center;
margin-left: auto;
margin-right: auto;
justify-content: center;

`;

const Title = styled.h1`
color: #61dafb;
text-align: center;
margin: 0;
font-size: 45px;
letter-spacing: 0.01em;
`;

const StartBtn = styled.button`
display: inline-block;
font-size: 16px;
background-color: #61dafb;
color: #000000;
padding: 10px 25px;
`;

const ScrollBar = styled.div`
display: flex;
flex-direction: row;

overflow-x: auto;
padding-top: 30px;

height: 200px;
white-space: nowrap;

`;

const ScrollItem = styled.div`
display: inline-block;
vertical-align: top;
whit-space: normal;
width: 75%;
margin-right: 20px;
padding-bottom: 40px;
`;

const Content = styled.div`
padding-left: 20px;
padding-right: 20px;
margin-left: auto;
margin-right: auto;
`;

const Footer = styled.footer`
background-color: #20232a;
color: #ffffff;
padding-top: 10px;
padding-bottom: 50px;
`;

const FooterContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const FooterItem = styled.div`
display: flex;
flex-direction: column;
width: 50%;
padding-top: 40px;

`;

const FooterItemTitle = styled.div`
color: #999;
font-size: 14px;
font-weight: 700;
`;


function App() {
  return (
    <div className="App">
      <Header>
        <Menu>
          <Icon src={Logo}/>
          <Nav>
            <MenuText>문서</MenuText>
            <MenuText>자습서</MenuText>
            <MenuText>블로그</MenuText>
            <MenuText>커뮤니티</MenuText>
          </Nav>
        </Menu>
      </Header>

      <Body>   
        <Main bg={Background}>
          <Title>React</Title>
          <p>사용자 인터페이스를 만들기 위한 JavaScript Library</p>
          <StartBtn>시작하기</StartBtn>
          <div>자습서 읽어보기</div>
        </Main>

        <ScrollBar>
          <ScrollItem>
            <h3>선언형</h3>
            <p>선언형 React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다.</p>         
            <p>선언형 뷰는 코드를 예측 가능하고 디버그하기 쉽게 만들어 줍니다.</p>
          </ScrollItem>
          <ScrollItem>
            <h3>선언형</h3>
            <p>선언형 React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다.</p>
            <p>선언형 뷰는 코드를 예측 가능하고 디버그하기 쉽게 만들어 줍니다.</p>
          </ScrollItem>
          <ScrollItem>
            <h3>선언형</h3>
            <p>선언형 React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다.</p>
            <p>선언형 뷰는 코드를 예측 가능하고 디버그하기 쉽게 만들어 줍니다.</p>
          </ScrollItem>
        </ScrollBar>

        <Content>
          <h3>간단한 컴포넌트</h3>
          <p>React 컴포넌트는 render()라는 메서드를 구현하는데, 이것은 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 합니다. 
            이 예제에서는 XML과 유사한 문법인 JSX를 사용합니다. 컴포넌트로 전달된 데이터는 render() 안에서 this.props를 통해 접근할 수 있습니다.</p>
          <p><strong>React를 사용하기 위해서 JSX가 꼭 필요한 것은 아닙니다.</strong> JSX를 컴파일한 JavaScript 코드를 확인하려면 Babel REPL을 이용해보세요.</p>

          <h3>간단한 컴포넌트</h3>
          <p>React 컴포넌트는 render()라는 메서드를 구현하는데, 이것은 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 합니다. 
            이 예제에서는 XML과 유사한 문법인 JSX를 사용합니다. 컴포넌트로 전달된 데이터는 render() 안에서 this.props를 통해 접근할 수 있습니다.</p>
          <p><strong>React를 사용하기 위해서 JSX가 꼭 필요한 것은 아닙니다.</strong> JSX를 컴파일한 JavaScript 코드를 확인하려면 Babel REPL을 이용해보세요.</p>

          <h3>간단한 컴포넌트</h3>
          <p>React 컴포넌트는 render()라는 메서드를 구현하는데, 이것은 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 합니다. 
            이 예제에서는 XML과 유사한 문법인 JSX를 사용합니다. 컴포넌트로 전달된 데이터는 render() 안에서 this.props를 통해 접근할 수 있습니다.</p>
          <p><strong>React를 사용하기 위해서 JSX가 꼭 필요한 것은 아닙니다.</strong> JSX를 컴파일한 JavaScript 코드를 확인하려면 Babel REPL을 이용해보세요.</p>
          
          <h3>간단한 컴포넌트</h3>
          <p>React 컴포넌트는 render()라는 메서드를 구현하는데, 이것은 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 합니다. 
            이 예제에서는 XML과 유사한 문법인 JSX를 사용합니다. 컴포넌트로 전달된 데이터는 render() 안에서 this.props를 통해 접근할 수 있습니다.</p>
          <p><strong>React를 사용하기 위해서 JSX가 꼭 필요한 것은 아닙니다.</strong> JSX를 컴파일한 JavaScript 코드를 확인하려면 Babel REPL을 이용해보세요.</p>

        </Content>
      </Body>
      
      <Footer>
        <FooterContainer>
          <FooterItem>
            <FooterItemTitle>문서</FooterItemTitle>
            <div>설치</div>
            <div>주요 개념</div>
            <div>테스팅</div>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>채널</FooterItemTitle>
            <div>설치</div>
            <div>주요 개념</div>
            <div>테스팅</div>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>커뮤니티</FooterItemTitle>
            <div>설치</div>
            <div>주요 개념</div>
            <div>테스팅</div>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>더보기</FooterItemTitle>
            <div>설치</div>
            <div>주요 개념</div>
            <div>테스팅</div>
          </FooterItem>

        </FooterContainer>
      </Footer>

    </div>
  );
}

export default App;
