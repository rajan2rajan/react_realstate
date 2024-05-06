import React from "react";
import { useState } from "react";

function Home() {
    const [increase, setIncrease] = useState(0);
    const change = () => {
        setIncrease(increase + 1);
    };

    return (
        <>
            {increase}
            <br />
            <button onClick={change}>adding</button>
        </>
    );
}

export default Home;
