import React from 'react';
import ReactDOM from 'react-dom';



class Recipe extends React.Component {
    render() {
            return <div className="Recipe"><span>{this.props.name}</span></div>
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
            {recipes}
        </div>
    }
}

export default RecipeBox
