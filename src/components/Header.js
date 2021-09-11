import React, {useState} from "react";
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
font-size: 20px;
color: white;
outline: none;
boarder: none;
`;

const DocMenu = styled(MenuText)`
    color: ${props => props.color};
`;

const TutorialMenu = styled(MenuText)`
    color: ${props => props.color};
`;

const BlogMenu = styled(MenuText)`
    color: ${props => props.color};
`;

const ComMenu = styled(MenuText)`
    color: ${props => props.color};
`;


function Header(){

const [index, setIndex] = useState(1);

return(
    <Head>

        <Menu>
            <Link to = "/">
            <IconWrap onClick={
                    ()=>{setIndex(0)}   
            }>
                <Icon src={Logo}/>
                <Brand>React</Brand>
            </IconWrap>
            </Link>
            
            <Nav/>
                <Link to = "/document">
                            <DocMenu color = {index===1? "cyan": "white"} onClick={
                                    ()=>{setIndex(1)}                                
                                }>문서</DocMenu>
                </Link>
                
                <Link to = "/tutorial">
                            <TutorialMenu color = {index===2? "cyan": "white"} onClick={
                                ()=>{setIndex(2)}                                
                                }>자습서</TutorialMenu>
                </Link>

                <Link to = "/blog">
                            <BlogMenu color = {index===3? "cyan": "white"}  onClick={
                              ()=>{setIndex(3)}
                            }>블로그</BlogMenu>
                </Link>
                
                <Link to = "/community">
                            <ComMenu color = {index===4? "cyan": "white"}  onClick={
                                ()=>{setIndex(4)}
                            }>커뮤니티</ComMenu>
                </Link>
        </Menu>
    </Head>
)


}

export default Header