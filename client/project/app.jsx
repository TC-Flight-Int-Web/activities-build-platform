/**
 * Created by kroll on 16/6/27.
 */
import React, {Component} from "react";
import {render} from "react-dom";

import LeftMenu from "./pages/leftMenu";
import ProjectList from "./pages/projectList";
import ProjectOperator from "./pages/projectOperator";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import "./pages/style/main.css"

class App extends Component {
    render(){
        return (
            <div className="main-page">
                <MuiThemeProvider >
                    <LeftMenu className="left-menu" />
                </MuiThemeProvider>
                <MuiThemeProvider >
                    <ProjectList className="right-body" />
                </MuiThemeProvider>
            </div>
        )
    }
}

injectTapEventPlugin();

render(
    <App />,
    document.getElementById("main")
);