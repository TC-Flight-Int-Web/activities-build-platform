/**
 * Created by kroll on 16/6/27.
 */
import React,{Component} from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

export default class ProjectList extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    handleRowTouch(e){
        alert(e);
    }

    render(){
        return (
            <Table className={this.props.className} multiSelectable={false}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>编号</TableHeaderColumn>
                        <TableHeaderColumn>名称</TableHeaderColumn>
                        <TableHeaderColumn>时间</TableHeaderColumn>
                        <TableHeaderColumn>状态</TableHeaderColumn>
                        <TableHeaderColumn>操作</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        <TableRowColumn>
                            <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right" onClick={this.handleRowTouch}>
                                <ActionGrade />
                            </IconButton>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                        <TableRowColumn>
                            <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
                                <ActionGrade />
                            </IconButton>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        <TableRowColumn>
                            <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
                                <ActionGrade />
                            </IconButton>
                        </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        <TableRowColumn>
                            <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
                                <ActionGrade />
                            </IconButton>
                        </TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}