import React from 'react';
import ReactDOM from 'react-dom';


class Ingredients extends React.Component {
    render() {
        const list = this.props.ingredients.map(ingredient=>{
            return <li key={ingredient}>{ingredient}</li>
        })
        return <div className="Ingredients">
            <h3>Ingredients:</h3>
            <ul>{list}</ul>
            </div>
    }
}

class Description extends React.Component {
    render() {
        return <div className="Description">
            <h3>Description:</h3>
            {this.props.description}</div>
    }
}


 class IngredientsBox extends React.Component{
    render() {
        return <div className ='IngredientsBox'>
            <Ingredients
                ingredients={this.props.ingredients}/>
            <Description
                description={this.props.description}/>
        </div>
    }
}

export default IngredientsBox
