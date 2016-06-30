import React, {Component} from "react";

import CircularProgress from 'material-ui/CircularProgress';

const style = {
        loadingStyle: {
            position: 'absolute',
            zIndex: '99999',
            top: '0px',
            left: '0px',
            bottom: '0px',
            right: '0px',
            textAlign: 'center'
        },
        loadingContentStyle: {
            display: 'inline-block',
            width: '1px',
            height: '100%',
            marginLeft: '-10px',
            verticalAlign: 'middle'
        },
        loadingBox:{
            position: 'relative',
            display: 'inline-block',
            borderRadius: '10px',
            padding:'30px',
            backgroundColor:'rgba(0,0,0,0.8)'
        }
    }
    ;

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show || false
        }
    }

    renderEmpty() {
        return (null);
    }

    renderLoading() {
        return (
            <div style={style.loadingStyle}>
                <div style={style.loadingContentStyle}></div>
                <div style={style.loadingBox}>
                    <CircularProgress />
                </div>

            </div>
        )
    }

    render() {
        return this.state.show ? this.renderLoading() : this.renderEmpty();
    }
}