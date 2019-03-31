import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="[ layout--container container ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><h1><i className="fa fa-gamepad"
                                                                                 aria-hidden="true"></i> Card Game</h1>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="../pages/aboutpageabout.jsx/">About</a></li>
                                <li><a href="../pages/contact-form-component/form-component.jsx">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
          </div>
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              {this.props.children}
            </div>
          </div>
          <footer>
              Copyright <i className="fa fa-copyright" aria-hidden="true"></i> Noroff
          </footer>
      </div>

    );
  }
}