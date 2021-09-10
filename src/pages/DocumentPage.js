import React from "react";
import styled from 'styled-components';
import Content from "../components/Content";

const Title = styled.h1=`
    color: rgb(40, 44, 52);
`;

function DocumentPage(){
    return(
        <div>
            <Title/>
            <Content/>
        </div>

    )
}

export default DocumentPage;