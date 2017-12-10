import React from 'react';
import ReactDOM from 'react-dom';
import IngredientsBox from './Ingredients.jsx';

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
        let ingredients = <IngredientsBox
            ingredients={this.props.ingredients}
            description={this.props.description}/>;
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
                recipes:  [ {name: "Spaghtetti",
                             ingredients:["lorem", "ipsum", "dolor", "sit", "amet"],
                             description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                            {name: "Chicken soup",
                             ingredients:["lorem", "ipsum", "dolor", "sit", "amet"],
                             description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                            {name: "Brownie",
                            ingredients:["lorem", "ipsum", "dolor", "sit", "amet"],
                            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                        ]
             }
     }

    render() {
        const recipes = this.state.recipes.map((recipe)=>{
            return <Recipe
                key = {recipe.name}
                name={recipe.name}
                ingredients={recipe.ingredients}
                description={recipe.description}/>
        });

        return <div className ='RecipeBox'>

                <NewRecipeBtn/>
            {recipes}
        </div>
    }
}

export default RecipeBox
