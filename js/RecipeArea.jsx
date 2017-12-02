import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBox from './RecipeBox.jsx';

 class RecipeArea extends React.Component{
    render() {
        return <div className ='RecipeArea'>
            <RecipeBox/>
        </div>
    }
}

export default RecipeArea
