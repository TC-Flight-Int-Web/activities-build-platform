/**
 * Created by kroll on 16/6/27.
 */
import React, {Component} from "react";
import {render} from "react-dom";

import Topbar from "./pages/topbar";
import LeftMenu from "./pages/leftMenu";
import ProjectList from "./pages/projectList";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import "./style/main.css"

class App extends Component {
    render() {
        return (
            <div className="main-page">
                <div className="top-nav">
                    <Topbar />
                </div>
                <div className="content-body">
                    <div className="left-menu">
                        <LeftMenu />
                    </div>

                    <div className="right-body">
                        <ProjectList />
                    </div>
                </div>
            </div>
        )
    }
}

injectTapEventPlugin();

render(
    <MuiThemeProvider >
        <App />
    </MuiThemeProvider>
    ,
    document.getElementById("main")
);