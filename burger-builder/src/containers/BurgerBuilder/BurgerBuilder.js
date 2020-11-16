import React, { Component } from 'react';
import Aux from '../../hoc/Auxi'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'

const INGREDIENT_PRICE = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
};

class BurgerBuilder extends Component {
    // constructor (props){
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients : {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchaseable : false,
        purchasing: false
    }

    purchaseHandler =()=>{
        this.setState({purchasing : true})
    }
    updatePurchases (ingredients){
        const sum = Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey]
        }).reduce((sum , el)=>{
            return sum + el
        },0)
        this.setState({purchaseable : sum>0})
    }

    addIngredientHandler = (type) => {

        // count how many ingredients add
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients ={...this.state.ingredients}
        updatedIngredients[type] = updatedCount

        // calculate burger price and his ingredients
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchases(updatedIngredients)
        
    }

    removeIngredientHandler = (type) => {
        // count how many ingredients add
        const oldCount = this.state.ingredients[type]
        if(oldCount<=0){
            return; // if ingedients are return - value then we found an error , to avoid this error we stop our ingredient in 0 value
        }
        const updatedCount = oldCount - 1
        const updatedIngredients ={...this.state.ingredients}
        updatedIngredients[type] = updatedCount

        // calculate burger price and his ingredients
        const priceDeduction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchases(updatedIngredients)
    }
    purchaseCanclearHandler = () => {
        this.setState({purchasing: false})
    }
    purchaseContinueHandler = () => {
        alert('You Continue!')
    }
    
    render() {
        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCanclearHandler}>
                    <OrderSummery ingredients = {this.state.ingredients}
                    purchaseContinued={this.purchaseContinueHandler}
                    purchaseCancelled={this.purchaseCanclearHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                ordered = {this.purchaseHandler}
                price = {this.state.totalPrice}
                />
            </Aux>
            
        );
    }
}

export default BurgerBuilder;