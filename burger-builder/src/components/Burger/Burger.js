import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    const transformIngredient = Object.keys(props.ingredients).map(igkey=>{ 
        // here igkey is ingredients key.
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient key={igkey + i} type={igkey} />;
        })
    })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformIngredient}
            <BurgerIngredient type='bread-bottom'/>
            

        </div>
    );
};

export default burger;