// imports
import React from 'react';
import Layout from './../../components/Layout/Layout';
import CharacterComponent from './../../components/character-component/Character-Component';
import Search from './../../components/search/Search';


export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterObj: [],
            characterCards: [],
            filtered:[]
        }
        this.getData = this.getData.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
    }

    componentDidMount() {
        const app = this;
        app.getData();
    }

    getData() {
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards/')
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                characterObj: result.cards,
                filtered: result.cards,
            });
        });
    }

    handleSearchTerm(searchTerm) {
        console.log('searchTerm', searchTerm);
        const app = this;
        let characterObj = app.state.characterObj;
        let characters = characterObj.filter((character) => {
            return character.name.indexOf(searchTerm) !== -1;



        });


        app.setState({
            characterCards: [],
            filtered: characters,


        });
        console.log('listObject', app.state.characterObj);
        console.log('filtered', app.state.filtered);
    }

    createCards(searchTerm){
        const app = this;
        let characterArray = app.state.filtered;

        characterArray.forEach((value, key) => {
            app.state.characterCards.push(
                <CharacterComponent
                    name={value.name}
                    image={value.imageUrl}
                    key={key}
                >
                </CharacterComponent>
            );
        });
    }

    render() {
        const app = this;
        app.createCards();
        return (

            <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                    <h2>
                        Home Page
                    </h2>
                </div>
                <div className="[ col-sm-12 ]">
                    <Search onSearchTerm={app.handleSearchTerm}></Search>
                </div>
                <div className="[ col-sm-12 ]">
                    {app.state.characterCards}
                </div>
            </div>
        );
    }
}
