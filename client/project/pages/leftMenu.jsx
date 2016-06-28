import React, {Component} from "react";

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
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
                <Subheader>Nested List Items</Subheader>
                <ListItem primaryText="项目专题" leftIcon={<ContentSend />}/>
                <ListItem primaryText="产品资源" leftIcon={<ContentDrafts />}/>
                <ListItem
                    primaryText="Inbox"
                    leftIcon={<ContentInbox />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem
                        key={1}
                        primaryText="Starred"
                        leftIcon={<ActionGrade />}
                      />,
                      <ListItem
                        key={2}
                        primaryText="Sent Mail"
                        leftIcon={<ContentSend />}
                        disabled={true}
                        nestedItems={[
                          <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                        ]}
                      />
                    ]}
                />
            </List>
        )
    }
}