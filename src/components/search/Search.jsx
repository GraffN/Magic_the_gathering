// imports
import React from 'react';

export default class Search extends React.Component {
constructor(props) {
    super(props);
    this.handleCharacterSearchTerm = this.handleCharacterSearchTerm.bind(this);
}

handleCharacterSearchTerm(){
    const app = this;
    let phrase = app.refs.searchTerm.value;
    app.props.onSearchTerm(phrase);
}

    render() {
        const app = this;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" id="searchBar">
                        <form className="relative">
                            <input type="text"
                                   ref="searchTerm"
                                   onChange={app.handleCharacterSearchTerm}
                                   className="form-control"
                                   placeholder="Search for a character"/>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
