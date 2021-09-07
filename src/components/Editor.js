import React from 'react'
import styled from 'styled-components'

const BoxWrap = styled.div`
border-radius: 10px 10px 0px 0px;
display:flex;
flex-direction: row;
padding: 20px 10px;
width: 100%;
`;

const EditorBoxWrap = styled.div`
overflow: hidden;
border-radius: 10px 0px 0px 10px;
padding: 0px 10px;
background: rgb(32, 35, 42);
width: 100%;

`;


const EditorBoxHead = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;

`;

const EditorBoxTitle = styled.div`
color: gray;
font-size: 14px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.08em;
`;

const EditorBoxLabel = styled.input.attrs({
    type: 'checkbox',
    checked: true,

})`
box-sizing: border-box;
`;

const EditorBox = styled.input.attrs({
    type: "text",
})`
width: 100%;
max-height: 340px;
background: rgb(40, 44, 52);
color: rgb(255, 255, 255);
padding-bottom: 20px;
width: 100%;

`;

const ResultBoxWrap = styled.div`
border-radius: 0px 10px 10px 0px;
border: 1px solid rgb(236, 236, 236);
width: 70%;
`;

const ResultBoxHead = styled.div`
padding: 0px 10px;
background-color: rgb(236, 236, 236);
`;

const ResultBoxTitle = styled.div`
color: rgb(109, 109, 109);\
font-size: 14px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.08em;

`;

const ResultBox = styled.div`
padding: 10px;
max-height: 340px;
`;

function Editor(){
    return(
        <BoxWrap>
            <EditorBoxWrap>
                <EditorBoxHead>
                    <EditorBoxTitle>Live JSX Editor</EditorBoxTitle>
                    <EditorBoxLabel></EditorBoxLabel>
                </EditorBoxHead>
                <EditorBox>


                </EditorBox>

            </EditorBoxWrap>


            <ResultBoxWrap>
                <ResultBoxHead>
                    <ResultBoxTitle>result</ResultBoxTitle>
                </ResultBoxHead>
                <ResultBox>
                    Hello Taylor
                </ResultBox>
            </ResultBoxWrap>            
        </BoxWrap>
    )
}

export default Editor