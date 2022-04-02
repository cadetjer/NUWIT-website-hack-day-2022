import React from "react";
import styled from "styled-components";

const HomeStyle = styled.div`
.container {
    padding: 3rem;
}
.row {
    display: flex;
    flex-direction: row;
}
`

export default function Home() {
    return (
        <HomeStyle>
            <div class='container'>
                <div class='row'>
                    <h1> Welcome to Website Day! </h1>
                    <div class='group-text'>
                    <ul>
                        <li> HTML </li>
                        <li> CSS </li>
                        <li> Bootstrap </li>
                    </ul>
                    </div>
                </div>
            </div>
        </HomeStyle>
    )
}