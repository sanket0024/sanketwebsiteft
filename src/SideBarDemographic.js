import React from 'react';
import SideBar from 'react-fixed-sidebar';
import Demographic from "./Demographic";

class SideBarDemographic extends React.Component {

    openNav = () => {
        this.sidebar.open()
    }

    closeNav = () => {
        this.sidebar.close()
    }

    toggleNav = () => {
        this.sidebar.toggle()
    }

    render() {
        return (
            <div className="app">
                <SideBar ref={x => this.sidebar = x} allowPartial={false} className="app__sidebar">
                    <Demographic/>
                </SideBar>
                <div className="app__buttons">
                    <button onClick={this.openNav}>open</button>
                    <button onClick={this.closeNav}>close</button>
                    <button onClick={this.toggleNav}>toggle</button>
                </div>
            </div>
        );
    }
}

export default SideBarDemographic;