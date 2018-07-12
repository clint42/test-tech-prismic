import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class ClientPicker extends Component {
    render() {
        return (
            <DropdownButton title="Select..." onSelect={(clientId) => { this.props.onChangeClient(clientId) }}>
                {
                    this.props.clientsList.map(client => (
                        <MenuItem eventKey={client} key={client}>{client}</MenuItem>
                    ))
                }
            </DropdownButton>
        );
    }
}

export default ClientPicker;