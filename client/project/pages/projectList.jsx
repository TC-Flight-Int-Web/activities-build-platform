/**
 * Created by kroll on 16/6/27.
 */
import React, {Component} from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import FlatButton from "material-ui/FlatButton";
import IconButton from 'material-ui/IconButton';
import RaisedButton from "material-ui/RaisedButton";
import ActionGrade from 'material-ui/svg-icons/action/grade';

import Dialog from 'material-ui/Dialog';

import Utils from '../libs/utils';
import Config from '../libs/config';

const style = {
    noSource: {
        width: '100%',
        textAlign: 'center',
        color: 'gray',
        padding: '10px'
    },
    topBtnStyle: {
        margin: 12
    },
    dialogStyle: {
        width: '300px',
        textAlgin: 'center'
    }
};

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dialogTitle: '新建专题',
            projects: [],
            templateValue:''
        }
    }

    componentWillMount() {
        this.props.shouldChangeLoadingState(true);
        this.initList();
    }

    initList() {
        var that = this;
        Utils.get({
            url: Config.apiRoot + Config.api.listproject
        }).then(function (data) {
            console.log(`${data}`);

            that.setState({projects: data});
            that.props.shouldChangeLoadingState(false);
        }).catch(function () {
            console.log(`ajax catch error ${Config.apiRoot + Config.api.listproject}`);
        })
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handlSave() {
        var that = this;
        var pName = this.refs.pName.getValue();
        var bDate = this.refs.bDate.getDate();
        var bTime = this.refs.bTime.getTime();
        var eDate = this.refs.eDate.getDate();
        var eTime = this.refs.eTime.getTime();

        this.props.shouldChangeLoadingState(true);
        Utils.post({
            url: "http://10.6.100.90:3000/addProject",
            param: {
                projectName: pName,
                beginDatetime: bTime,
                endDateTime: eTime
            }
        }).then(function (data) {
            if (data.result) {
                that.handleClose();
                that.initList();
            } else {
                console.log('ajax error result');
            }
        })
    }

    handleRowTouch() {
        alert(JSON.stringify(this));
    }

    handleSelectChange(event,index,value){
        this.setState({templateValue:value});
    }

    render() {
        var list = [];
        if (this.state.projects && this.state.projects.length > 0) {
            for (let i = 0; i < this.state.projects.length; i++) {
                let item = this.state.projects[i];
                list.push(<TableRow key={"tableRow_" + i}>
                    <TableRowColumn>{item.projectName}</TableRowColumn>
                    <TableRowColumn>{item.beginDatetime}~{item.endDatetime}</TableRowColumn>
                    <TableRowColumn>{item.state == 1 ? "有效" : "无效"}</TableRowColumn>
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
                    <RaisedButton label="新建专题" primary={true} style={style.topBtnStyle} onClick={this.handleOpen.bind(this)}/>
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
                {list.length == 0 &&
                <div style={style.noSource}>
                    暂无数据
                </div>
                }
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
                    contentStyle={style.dialogStyle}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    <div>
                        <TextField ref="pName" hintText="专题名称"/>
                        <br /><br />
                        <SelectField hintText="模板" value={this.state.templateValue} onChange={this.handleSelectChange.bind(this)}>
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </SelectField>
                        <br /><br />
                        <DatePicker ref="bDate" defaultTime={null} hintText="开始日期" autoOk={true} cancelLabel={"取消"} />
                        <TimePicker ref="bTime" defaultTime={null} hintText="结束时间" autoOk={true} cancelLabel={"取消"} format={"24hr"}/>
                        <br /><br />
                        <DatePicker ref="eDate" defaultTime={null} hintText="结束日期" autoOk={true} cancelLabel={"取消"} />
                        <TimePicker ref="eTime" defaultTime={null} hintText="结束时间" autoOk={true} cancelLabel={"取消"} format={"24hr"}/>
                        <br />
                    </div>
                </Dialog>
            </div>
        )
    }
}