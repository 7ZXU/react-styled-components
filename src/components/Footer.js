import React from 'react'
import styled from 'styled-components'


const FooterWrap = styled.footer`
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
font-family: 'sans-serif';

`;

const FooterItemTitle = styled.div`
color: #999;
font-size: 14px;
font-weight: 700;
`;



function Footer(){
    return (
        <FooterWrap>
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
      </FooterWrap>


    )   
}

export default Footer