import React from 'react';
import ReactDOM from 'react-dom';
import Ingredients from './Ingredients.jsx';

class NewRecipeBtn extends React.Component {
    render() {
        return <div className="NewRecipeBtn">Add New Recipe</div>
    }
}

class Arrow extends React.Component {

    render(){
        let arrow = <div onClick={this.props.arrowsChange} className="close-recipe"> </div>;

        if(this.props.isExpand){
            arrow = <div onClick={this.props.arrowsChange} className="expand-recipe"></div>
        }
        console.log(arrow);

        return <div>{arrow}</div>
    }
}

class Recipe extends React.Component {
    constructor() {
        super();
        this.state={
            arrowExpand:true,
        }
    }

    arrowHandler=()=>{
        const arrowBool=this.state.arrowExpand;
        this.setState({
            arrowExpand: !arrowBool,
        })
    }
    render() {
        let ingredients = <Ingredients/>;
        if(this.state.arrowExpand){ ingredients= null}
            return <div className="recipes">
                        <div className="Recipe"><span>{this.props.name}</span>
                            <Arrow
                                arrowsChange={this.arrowHandler}
                                isExpand={this.state.arrowExpand}/>
                        </div>
                        {ingredients}
                    </div>

    }
}


 class RecipeBox extends React.Component{
     constructor(props){
         super(props);
             this.state = {
                recipes:  [ {name: "Spaghtetti"},
                            {name: "Chicken soup"},
                            {name: "Brownie"}
                        ]
             }
     }

    render() {
        const recipes = this.state.recipes.map((recipe)=>{
            return <Recipe
                key = {recipe.name}
                name={recipe.name}/>
        });

        return <div className ='RecipeBox'>

                <NewRecipeBtn/>
            {recipes}
        </div>
    }
}

export default RecipeBox
