import React, { useState } from 'react';
import AnimatedNumbers from "react-animated-numbers";

const BusinessSummeryCounter = ({ number }) => {
    const [num, setNum] = useState(0);

    return (
        <div className='my-12'>

            <AnimatedNumbers
                includeComma
                animateToNumber={num}
                fontStyle={{ fontSize: 40 }}
                configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                ]}
            ></AnimatedNumbers>

            {/* <AnimatedNumbers
                animateToNumber={num}
                fontStyle={{ fontSize: 32 }}
                configs={(number, index) => {
                    return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
            ></AnimatedNumbers> */}
        </div>

    );
};

export default BusinessSummeryCounter;