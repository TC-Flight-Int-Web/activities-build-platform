/**
 * Created by kroll on 16/6/27.
 */
import React, {Component} from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import FlatButton from "material-ui/FlatButton";
import IconButton from 'material-ui/IconButton';
import RaisedButton from "material-ui/RaisedButton";
import ActionGrade from 'material-ui/svg-icons/action/grade';

import Dialog from 'material-ui/Dialog';

import Utils from '../libs/utils';

const topBtnStyle = {
    margin: 12
};

const dialogStyle = {
    width: '300px',
    textAlgin: 'center'
};

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dialogTitle: '新建专题',
            projects:[]
        }
    }

    componentWillMount(){
        var that = this;
        Utils.get({
            url:'http://10.6.100.90:3000/listproject'
        }).then(function(data){
            console.log(`${data}`);

            that.setState({projects:data});
        }).catch(function(error){
            console.log(`${error.stack}`);
        })
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handlSave() {
        this.handleClose();
    }

    handleRowTouch(projectId) {
        alert(JSON.stringify(this));
    }

    render() {
        var list = [];
        if (this.state.projects && this.state.projects.length > 0) {
            for (let i = 0; i < this.state.projects.length; i++) {
                let item = this.state.projects[i];
                list.push(<TableRow key={"tableRow_" + i} >
                            <TableRowColumn>{item.projectName}</TableRowColumn>
                            <TableRowColumn>{item.beginDatetime}~{item.endDatetime}</TableRowColumn>
                            <TableRowColumn>{item.state==1?"有效":"无效"}</TableRowColumn>
                            <TableRowColumn>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this,item.projectId)}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this,item.projectId)}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this,item.projectId)}>
                                    <ActionGrade />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>)
            }
        }


        return (
            <div className={this.props.className}>
                <div>
                    <RaisedButton label="新建专题" primary={true} style={topBtnStyle} onClick={this.handleOpen.bind(this)}/>
                </div>

                <Table selectable={false}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>名称</TableHeaderColumn>
                            <TableHeaderColumn>时间</TableHeaderColumn>
                            <TableHeaderColumn>状态</TableHeaderColumn>
                            <TableHeaderColumn>操作</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {list}
                    </TableBody>
                </Table>

                <Dialog
                    title={this.state.dialogTitle}
                    actions={[
                        <FlatButton
                            label="Ok"
                            primary={true}
                            keyboardFocused={true}
                            onTouchTap={this.handlSave.bind(this)}
                          />
                    ]}
                    contentStyle={dialogStyle}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    <div>
                        <TextField ref="pName" hintText="专题名称"/>
                        <br />
                        <br />
                        <DatePicker ref="bTime" hintText="专题开始时间"/>
                        <br />
                        <DatePicker ref="eTime" hintText="专题结束时间"/>
                        <br />
                    </div>
                </Dialog>
            </div>
        )
    }
}