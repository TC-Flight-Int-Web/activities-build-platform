import React,{Component} from "react";

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

export default class Topbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="专享活动制作平台"/>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}