// imports
import React from 'react';

export default class CharacterSpecificComponent extends React.Component {
    render() {
        return (
            <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                </div>
                <div className="[ col-sm-4 ]">
                    <img src={this.props.image} />
                </div>
                <div className="[ col-sm-8 ]">
                    <h3>Name: {this.props.name}</h3>
                </div>
            </div>
        );
    }
}
