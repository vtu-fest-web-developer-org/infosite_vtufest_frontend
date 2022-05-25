import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
    return <h1>{status}</h1>;
};

function BmsceMap() {
    return (
        <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
            <div></div>
        </Wrapper>

    )
}

export default BmsceMap;