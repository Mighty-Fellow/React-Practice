import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toollbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: true});
    }
    render() {
        return (
            <Aux>
            <Toolbar/>
            <SideDrawer open={this.state.sideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
}

export default Layout;