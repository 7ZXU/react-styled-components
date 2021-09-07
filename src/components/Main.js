import React from 'react';
import styled from 'styled-components';
import Background from '../assets/react-background.png';

const MainDiv = styled.div`
padding-top: 60px;
display: flex;
flex-direction: column;
background-image: url(${(props) => props.bg});
background-size: cover;
color: #ffffff;
width: 100%;
padding-bottom: 10px;
align-items : center;
justify-content: center;
`;

const Title = styled.h1`
color: #61dafb;
text-align: center;
margin: 0;
font-size: 45px;
letter-spacing: 0.01em;
`;


const BtnWrap = styled.div`
display: flex;
flex-direction: row;
align-items : center;
`;


const StartBtn = styled.button`
display: inline-block;
font-size: 16px;
background-color: #61dafb;
color: #000000;
padding: 10px 25px;
`;

function Main(){
    return(
        <MainDiv bg={Background}>
            <Title>React</Title>
            <p>사용자 인터페이스를 만들기 위한 JavaScript Library</p>
            <BtnWrap>
                <StartBtn>시작하기</StartBtn>
                <div>자습서 읽어보기 </div>
            </BtnWrap>

        </MainDiv>

    )
}

export default Main