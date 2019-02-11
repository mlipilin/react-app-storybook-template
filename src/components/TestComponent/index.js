import React, { Component } from 'react';

import './styles.css';

class TestComponent extends Component {
    render() {
        return (
            <div className="TestComponent">
                <h1 className="TestComponent__Title">Test Component</h1>
                <div className="TestComponent__Content">
                    <p>Some content</p>
                </div>
            </div>
        );
    }
}

export default TestComponent;
