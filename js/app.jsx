import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function() {

    class Header extends React.Component {

        render(){
            return <header>CookBook</header>
        }
    }

    class Footer extends React.Component {
        render(){
            return <footer>Created by <a href="#">Aleksandra Lisek</a></footer>
        }
    }

    class Body extends React.Component {
        render(){
            return <div className="book-body"></div>
        }
    }

class App extends React.Component {
    render() {
        return <div className="all">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    }
}

    ReactDOM.render(
          <App/>,
          document.getElementById('app')
        );




});
