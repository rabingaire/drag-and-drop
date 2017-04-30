import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onSubmit() {
        let text = this.refs.inputForm.value;
        this.setState({text});
    }

    render(){
        return (
            <div>
                <div className="row mgtp-10">
                    <div className="small-12 medium-4 medium-centered columns text-center">
                        <form>
                            <input type="text" placeholder="Enter Text..." ref="inputForm"/>
                            <a href="#" className="button" onClick={this.onSubmit.bind(this)}>Post</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}