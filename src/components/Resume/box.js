import React, { Component } from "react";
//import { grey } from "@material-ui/core/colors";

class Box extends Component {
    render() {
        return (
            <div>
                <div  style={{
                        height: `${this.props.height}px`,
                        width: `${this.props.width}px`,
                        backgroundColor: this.props.color
                        

                    }}>
                   
                </div>
            </div>
        );
    }
}

export default Box;