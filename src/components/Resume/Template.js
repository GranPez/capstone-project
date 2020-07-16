import React, { Component } from "react";
import Box from './box'

class Template extends Component {
    render() {
        return (
            <div>
                <Box height={74} width={236} color="grey" />
                <Box height={74} width={500} color="grey" />
                <Box height={74} width={236} color="grey" />
                <Box height={74} width={236} color="grey" />
            </div>
        );
    }
}

export default Template;