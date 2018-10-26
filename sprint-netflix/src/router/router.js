import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Header from "../components/header";
import Showcard from "../components/showcard";
import Homepage from "../components/homepage";
const ReactRouter =()=>{
return (
<React.Fragment>
<Header />
<Route path="/homepage" component={Homepage} />
<Route  path="/showcard" component={Showcard} />
</React.Fragment>
);}
export default ReactRouter;
