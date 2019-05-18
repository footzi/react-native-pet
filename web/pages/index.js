import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./home"));

const App = () => <Home />;
export default App;
