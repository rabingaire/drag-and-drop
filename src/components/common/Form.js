import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <div className="mgtp-10">
                <form>
                    <div className="row">
                        <div className="medium-6 columns">
                            <input type="text" placeholder="Enter Text..."/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}