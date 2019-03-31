// imports
import React from 'react';
import CharacterSpecificComponent from './../../components/charachter-specific-component/Character-Specific-Component';

export default class CharacterSpecific extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            specificCharacterObj: [],
            characterId: this.props.match.params.id
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }

    getData(){
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards/'+app.state.characterId)
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                specificCharacterObj: result.card,
            });

            console.log(result, 'result')
        });
    }

    render() {
        const app = this;
        let specificCharacter = <CharacterSpecificComponent
            image={app.state.specificCharacterObj.imageUrl}
            name={app.state.specificCharacterObj.name}

        >
        </CharacterSpecificComponent>;
        return (
                <div className="[ card row ]">
                    <div className="[ card--info ]">
                        {specificCharacter}
                    </div>
                </div>
        );
    }
}
