import React, {Component} from "react";

import {List, ListItem} from 'material-ui/List';
import SubHeader from 'material-ui/Subheader';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex : 0,
        }
    }

    handleTap(index){
        if(this.state.activeIndex == index)return;

        this.setState({activeIndex:index});
        this.props.onMenuItemhandlerTap(index);
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
                    leftIcon={<ContentDrafts />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem
                        key={1}
                        primaryText="专题列表"
                        rightIcon={this.state.activeIndex==0 ? <ContentSend /> : null}
                        onTouchTap={this.handleTap.bind(this,0)}
                      />,
                      <ListItem
                        key={2}
                        primaryText="资源管理"
                        rightIcon={this.state.activeIndex==1 ? <ContentSend /> : null}
                        onTouchTap={this.handleTap.bind(this,1)}
                      />,
                      <ListItem
                        key={3}
                        primaryText="模板管理"
                        rightIcon={this.state.activeIndex==2 ? <ContentSend /> : null}
                        onTouchTap={this.handleTap.bind(this,2)}
                      />
                    ]}
                />
            </List>
        )
    }
}