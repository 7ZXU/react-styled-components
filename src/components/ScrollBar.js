import React from 'react';
import styled from 'styled-components';

const ScrollBarWrap = styled.div`

@media screen and (min-width: 778px){

display: flex;
flex-direction: row;
height: 200px;
margin-top: 60px;
margin-bottom: 65px;
position: relative;

}


@media screen and (max-width: 778px){
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

}

`;

const ScrollItem = styled.div`

vertical-align: top;
white-space: normal;
width: 100%;
padding: 0px 20px;

`;

function ScrollBar(){

    return (
    <ScrollBarWrap>
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
    </ScrollBarWrap>
    )

}

export default ScrollBar