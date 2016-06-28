import React, {Component} from "react";

import {List, ListItem} from 'material-ui/List';
import SubHeader from 'material-ui/Subheader';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';

export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <List className={this.props.className}>
                <SubHeader>菜单</SubHeader>
                <ListItem
                    primaryText="项目专题管理"
                    leftIcon={<ActionGrade />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem
                        key={1}
                        primaryText="专题列表"
                        leftIcon={<ContentSend />}
                      />,
                      <ListItem
                        key={2}
                        primaryText="产品管理"
                        leftIcon={<ContentSend />}
                      />,
                      <ListItem
                        key={3}
                        primaryText="分类管理"
                        leftIcon={<ContentSend />}
                      />
                    ]}
                />
            </List>
        )
    }
}