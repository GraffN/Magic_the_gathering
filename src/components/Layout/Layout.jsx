import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="[ layout--container container ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              <nav className="[ layout--container__header header ]">
                <img src="https://www.freeiconspng.com/uploads/rick-and-morty-beige-folder-icon-1.png" alt="Rick and Morty" />
              </nav>
            </div>
          </div>
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}