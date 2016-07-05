/**
 * Created by kroll on 16/6/27.
 */
import React, {Component} from "react";
import {render} from "react-dom";

import Topbar from "./pages/topbar";
import LeftMenu from "./pages/leftMenu";
import ProjectList from "./pages/projectList";
import SourceList from "./pages/sourceList";
import TemplateList from "./pages/templateList";

import Loading from './components/loading';
import Snackbar from 'material-ui/Snackbar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import "./style/main.css"

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPage : 0,
            showLoading : false,
            showSnackbar : false,
            snackbarMessage : '通告'
        }
    }

    changeShowLoadingState(bl){
        this.setState({showLoading:bl});
    }

    handleSnackbarTap(){
        this.setState({showSnackbar:true});
    }

    showSnackbar(content){
        this.setState({showSnackbar:true,snackbarMessage:content});
    }

    onMenuItemhandlerTap(index){
        this.setState({showPage:index});
    }

    render() {
        return (
            <div className="main-page">
                <div className="top-nav" onTouchTap={this.handleSnackbarTap.bind(this)}>
                    <Topbar />
                </div>
                <div className="content-body">
                    <div className="left-menu">
                        <LeftMenu onMenuItemhandlerTap={this.onMenuItemhandlerTap.bind(this)} />
                    </div>

                    <div className="right-body">
                        { this.state.showPage == 0 &&
                            <ProjectList shouldChangeLoadingState={this.changeShowLoadingState.bind(this)}
                                         showSnackbar={this.showSnackbar.bind(this)}/>
                        }

                        { this.state.showPage == 1 &&
                            <SourceList shouldChangeLoadingState={this.changeShowLoadingState.bind(this)}
                                        showSnackbar={this.showSnackbar.bind(this)}/>
                        }

                        { this.state.showPage == 2 &&
                            <TemplateList shouldChangeLoadingState={this.changeShowLoadingState.bind(this)}
                                        showSnackbar={this.showSnackbar.bind(this)}/>
                        }

                    </div>
                </div>

                <Loading show={this.state.showLoading} />

                <Snackbar
                    open={this.state.showSnackbar}
                    message={this.state.snackbarMessage}
                    autoHideDuration={4000}
                    onRequestClose={(()=>{this.setState({showSnackbar:false})}).bind(this)}
                />
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