import React from "react";
import styled from 'styled-components';
import Logo from '../assets/logo192.png';
import { Link } from "react-router-dom";

const Head = styled.div`
background-color: #20232a;
color: #ffffff;
position: fixed;
z-index: 1;
width: 100%;
top: 0;
left: 0;
height: 60px;
padding-left: 20px;
padding-right: 20px;
margin-left: auto;
margin-right: auto;
`;

const Menu = styled.div`
display: flex;
align-items: center;
flex-direction: row;
height: 60px;
`;


const IconWrap = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`;

const Icon = styled.img`
height: 20px;
`;

const Brand = styled.span`
font-weight: 700;
font-size: 20px;
color: #61dafb;
margin-left: 10px;
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

function Header(){

return(
    <Head>

        <Menu>
            <IconWrap>
                <Icon src={Logo}/>
                <Brand>React</Brand>
            </IconWrap>
            

            <Nav/>
                <Link to = "/documnet">
                    <MenuText>문서</MenuText>
                </Link>
                <MenuText>자습서</MenuText>
                <MenuText>블로그</MenuText>
                <MenuText>커뮤니티</MenuText>
        </Menu>
    </Head>
)


}

export default Header