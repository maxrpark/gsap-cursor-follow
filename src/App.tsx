import React from "react";
import "./App.css";

import { CursorFollowTs, CursorFollowJS } from "./components";

const App: React.FC = () => {
    return (
        <div>
            <CursorFollowTs />

            {/* <CursorFollowJS /> */}
            <h2 className='title'>hello</h2>
        </div>
    );
};

export default App;
