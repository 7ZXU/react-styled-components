import React from 'react';
import styled from 'styled-components';

const ContentWrap = styled.div`
padding-left: 20px;
padding-right: 20px;
margin-left: auto;
margin-right: auto;
`;


const ContentTitle = styled.h3`

`;

const ContentBody = styled.p`

`;


function Content(){
    return(
        <ContentWrap>
            <ContentTitle>간단한 컴포넌트</ContentTitle>
            <ContentBody>
                React 컴포넌트는 render()라는 메서드를 구현하는데, 이것은 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 합니다. 
                이 예제에서는 XML과 유사한 문법인 JSX를 사용합니다. 컴포넌트로 전달된 데이터는 render() 안에서 this.props를 통해 접근할 수 있습니다.
            </ContentBody>
            <ContentBody><strong>React를 사용하기 위해서 JSX가 꼭 필요한 것은 아닙니다.</strong> JSX를 컴파일한 JavaScript 코드를 확인하려면 Babel REPL을 이용해보세요.</ContentBody>
        </ContentWrap>
     
    )


}

export default Content