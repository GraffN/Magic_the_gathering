// imports
import React from 'react';

export default class CharacterComponent extends React.Component {
    render() {
        return (
            <div className="[ col-sm-4 ]">
                <div className="[ card ]">
                    <a href={'#/character-specfic/'+this.props.id} >

                        <div className="[ card--info ]">
                            <h3 className="[ card--info__center ]">{this.props.name}</h3>
                            <div>
                                <img className="[ card--image ]" src={this.props.image} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
