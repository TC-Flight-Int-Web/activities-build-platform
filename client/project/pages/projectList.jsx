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

const topBtnStyle = {
    margin: 12
};

const dialogStyle = {
    width:'300px',
    textAlgin:'center'
};

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dialogTitle: '新建专题'
        }
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

    handleRowTouch(e) {
        alert(JSON.stringify(this));
    }

    render() {
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
                        <TableRow>
                            <TableRowColumn>周边游周边游周边游周边游周边游周边游周边游周边游周边游周边游</TableRowColumn>
                            <TableRowColumn>2016-07-11~2016-07-31</TableRowColumn>
                            <TableRowColumn>有效</TableRowColumn>
                            <TableRowColumn>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this)}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this)}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this)}>
                                    <ActionGrade />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>周边游</TableRowColumn>
                            <TableRowColumn>2016-07-11~2016-07-31</TableRowColumn>
                            <TableRowColumn>有效</TableRowColumn>
                            <TableRowColumn>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this)}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this)}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch.bind(this)}>
                                    <ActionGrade />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>周边游</TableRowColumn>
                            <TableRowColumn>2016-07-11~2016-07-31</TableRowColumn>
                            <TableRowColumn>有效</TableRowColumn>
                            <TableRowColumn>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>周边游</TableRowColumn>
                            <TableRowColumn>2016-07-11~2016-07-31</TableRowColumn>
                            <TableRowColumn>有效</TableRowColumn>
                            <TableRowColumn>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>周边游</TableRowColumn>
                            <TableRowColumn>2016-07-11~2016-07-31</TableRowColumn>
                            <TableRowColumn>有效</TableRowColumn>
                            <TableRowColumn>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>周边游</TableRowColumn>
                            <TableRowColumn>2016-07-11~2016-07-31</TableRowColumn>
                            <TableRowColumn>有效</TableRowColumn>
                            <TableRowColumn>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>周边游</TableRowColumn>
                            <TableRowColumn>2016-07-11~2016-07-31</TableRowColumn>
                            <TableRowColumn>有效</TableRowColumn>
                            <TableRowColumn>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                                <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"
                                            onTouchTap={this.handleRowTouch}>
                                    <ActionGrade />
                                </IconButton>
                            </TableRowColumn>
                        </TableRow>
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