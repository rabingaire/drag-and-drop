import React from 'react';
import { Pannel, Card } from './common';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            cardPosition: this.props.cardPosition
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

    renderCards() {
        const cards = [];
        this.state.cards.map( card => 
            cards.push(<Card text={card.text} id={card.id} key={card.id}/>)
        );
        return cards;
    }

    renderPannel(i, pannelTitle) {
        const cardPosition = this.state.cardPosition;
        const pannel = ( i == cardPosition) ? this.renderCards() : null;

        return (
            <div key={i} className="medium-4 columns text-center pannel pd-10" onClick={() => this.handlePannelClick(i)}>
                <Pannel title={pannelTitle}>
                    {pannel}
                </Pannel>
            </div> 
        );
    }

    handlePannelClick(cardPosition) {
        this.setState({cardPosition});
    }

    render(){
        const pannels = [];
        const pannelTitles = ['To Do', 'Completed']
        for (let i = 0; i < 2; i++) {
            pannels.push(this.renderPannel(i, pannelTitles[i]));
        }

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
                    {/*<Pannel title="To Do">
                        { this.state.cards.map( card => 
                            <Card text={card.text} key={card.id}/>
                        )}
                    </Pannel>
                    <Pannel title="Completed">

                    </Pannel>*/}
                    {pannels}
                </div>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Main);