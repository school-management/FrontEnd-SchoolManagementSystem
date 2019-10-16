import React, { Component } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Heading5 from '../../components/typography/Heading5';
import Bell from '../../assets/icons/fontawesome/bell-regular.svg';
import { Row, Col } from 'react-grid-system';
import BellIcon from '../../components/icon/topbar/BellIcon';
import TinyDivider from '../../components/divider/TinyDivider';
import Envelope from '../../assets/icons/fontawesome/envelope-regular.svg';
import Avatar from '../../assets/img/avatar.jpg';
import TopbarFlex from '../../components/topbar/TopbarFlex';
import TopbarIconSection from '../../components/topbar/TopbarIconSection';

export default class TopnavFlex extends Component {
    render() {
        return (
            <TopbarFlex style={{ flexWrap: "wrap" }}>

                <Heading5 style={{ marginLeft: "2.5em", flexBasis: "80em" }} >School Management System</Heading5>

                <TinyDivider style={{ flexDirection: "column", marginBottom: "0.8em" }} />
                <div style={{ flexBasis: "1em" }}></div>
                <BellIcon src={Bell} style={{ flexBasis: "2em", flexDirection: "column", marginBottom: "0.8em" }}></BellIcon>
                <div style={{ flexBasis: "1em" }}></div>
                <BellIcon src={Envelope} style={{ flexBasis: "2em", flexBasis: "column", marginBottom: "0.8em" }} ></BellIcon>
                <div style={{ flexBasis: "1em" }}></div>
                <TinyDivider style={{ flexDirection: "column", marginBottom: "0.8em" }} />
                <div style={{ flexBasis: "1em" }}></div>

                <BellIcon src={Avatar} style={{ height: "45px", marginTop: "0.3em", borderRadius: "3em", alignItems: "center", flexDirection: "column" }}></BellIcon>
                <div style={{ flexBasis: "1em" }}></div>
            </TopbarFlex >
        )
    }
}
