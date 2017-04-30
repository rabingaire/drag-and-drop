import React from 'react';
import { Pannel, Card } from './common';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [] 
        };
    }

    onSubmit() {
        let text = this.refs.inputForm.value;
        if (text != null && text != '') {
            let id = this.state.cards.length; 
            let card = { text, id }
            let newState = this.state.cards.concat(card)
            this.setState({ cards: newState});

            this.refs.inputForm.value = null;
        }
    }

    render(){
        return (
            <div>
                <div className="row mgtp-10">
                    <div className="small-12 medium-4 medium-centered columns text-center">
                        <form>
                            <input type="text" placeholder="Enter Text..." ref="inputForm" required="true"/>
                            <a href="#" className="button" onClick={this.onSubmit.bind(this)}>Post</a>
                        </form>
                    </div>
                </div>

                <div className="row mgtp-10">
                    <Pannel title="To Do">
                        { this.state.cards.map( card => 
                            <Card text={card.text} key={card.id}/>
                        )}
                    </Pannel>
                    <Pannel title="Completed">
                    </Pannel>
                </div>
            </div>
        )
    }
}