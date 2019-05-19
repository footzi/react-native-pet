import React from "react";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "../../state/connect";

const Home = dynamic(() => import("./home"));

const App = () => (
    <Provider store={store}>
        <Home />
    </Provider>
);
export default App;
