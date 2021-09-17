import React from "react";
import styled from 'styled-components';
import {ContentWrap, IndexWrap} from "../components/Style";



const Title = styled.h1`
    margin-top: 80px;
    font-size: 60px;
    font-weight: 700;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  padding-left: 20px;
  padding-right: 20px;

`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width:80%;

`;

const IndexNav = styled.nav`
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;

const TitleButton = styled.button`
  border: none;
  background-color: transparent;

`;

const IndexOutList = styled.ul`
  list-style:none;
  padding-left: 0px;
`;

const IndexInList = styled.ul`
  list-style:none;
  padding-left: 10px;
`;

function TutorialPage(){
    return(
        <Body>
            <Section>
                <a id="startTutorial"><Title>자습서: React 시작하기</Title></a>
                <ContentWrap>
                    <h2>자습서를 시작하기 전에</h2>
                    <p>우리는 이 자습서에서 작은 게임을 만들겁니다. 게임을 만들고 싶지 않아서 자습서를 건너뛰고 싶을 수 있습니다. 그래도 한번 해보세요! 자습서를 통해 React 앱을 만드는 기본적인 사항들을 배웁니다. 이것을 마스터하면 React를 더 깊게 이해할 수 있습니다.</p>
                </ContentWrap>

                <ContentWrap>
                    <a id="settingTutorial"><h2>자습서 환경 설정</h2></a>
                    <p>자습서를 완성하는 방법에는 두 가지가 있습니다. 브라우저에서 코드를 작성해도 되고 컴퓨터에 로컬 개발 환경을 설정해도 됩니다.</p>
                    <h3>선택 1: 브라우저에 코드 작성하기</h3>
                    <p>이 옵션은 가장 빠르게 시작하는 방식입니다!

                        먼저 새 탭에서 초기 코드를 열어주세요. 새 탭은 비어있는 틱택토 게임판과 React 코드를 보여줄 것입니다. 우리는 자습서에서 React 코드를 편집할 것입니다.

                        이제 두 번째 설정 옵션을 건너뛰고 개요 단락으로 넘어가서 React에 대한 개요를 확인해주세요.

                    </p>
                    <h3>선택 2: 자신의 컴퓨터에서 코드 작성하기</h3>
                    <p>이 방식은 완전히 선택사항이며 이 자습서에 필요한 것은 아닙니다!선택 사항: 선호하는 텍스트 편집기를 사용하기 위한 지침</p>
                </ContentWrap>

                <IndexWrap>
                    <IndexNav>
                        <TitleButton>자습서</TitleButton>

                        <IndexOutList>
                            <a href="#startTutorial">자습서를 시작하기 전에</a>
                            <IndexInList>
                                <li>무엇을 만들게 될까요?</li>
                                <li>필요한 선수 지식</li>
                            </IndexInList>
                        </IndexOutList>

                        <IndexOutList>
                            <a href="#settingTutorial">자습서를 위한 설정</a>
                            <IndexInList>
                                <li>선택1</li>
                                <li>선택2</li>
                            </IndexInList>
                        </IndexOutList>



                    </IndexNav>
                </IndexWrap>


            </Section>

        </Body>

    )
}

export default TutorialPage;