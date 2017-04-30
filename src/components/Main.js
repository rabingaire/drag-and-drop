import React from 'react';

import { Form, Button } from './common';

export default class Main extends React.Component {
    render(){
        return (
            <div>
                <div className="row mgtp-10">
                    <div className="small-12 medium-4 medium-centered columns">
                        <Form />
                        <Button />
                    </div>
                </div>
            </div>
        )
    }
}