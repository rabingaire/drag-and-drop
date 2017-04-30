import React from 'react';

import { Form, Button } from './common';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render(){
        return (
            <div>
                <div className="row mgtp-10">
                    <div className="small-12 medium-4 medium-centered columns">
                        <Form type="text" placeholder="Enter Text"/>
                        <Button value="Post"/>
                    </div>
                </div>
            </div>
        )
    }
}