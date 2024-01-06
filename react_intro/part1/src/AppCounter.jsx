import { useState } from "react";

const AppCounter = () => {
    [counter, setCounter] = useState(0);
     return(
        <div>
            <p>{counter}</p>
        </div>
    )
}

export default AppCounter;