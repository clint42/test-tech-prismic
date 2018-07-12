import React, { Component } from 'react';
import { Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';

import { connect } from 'react-redux';

import { readClientLogs, retrieveClientsList } from '../actionCreators/logs';

import ClientPicker from './ClientPicker';
import ConsumptionCDN from './ConsumptionCDN';

class DataVizContainer extends Component {
    componentDidMount() {
        this.props.retrieveClientsList();
    }

    onChangeClient(clientId) {
        this.props.readClientLogs(clientId);
    }

    render() {
        console.log(this.props.clientLogs);
        return (
            <Grid className="App">
                <Row>
                    <Col xs={3} xsOffset={9}>
                        <ClientPicker clientsList={this.props.clientsList} onChangeClient={(clientId) => { this.onChangeClient(clientId) } } />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ConsumptionCDN clientLogs={this.props.clientLogs} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    clientLogs: state.clientLogs,
    clientsList: state.clientsList,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
   readClientLogs: (clientHost) => {
       dispatch(readClientLogs(clientHost));
   },
   retrieveClientsList: () => {
       dispatch(retrieveClientsList());
   }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataVizContainer);