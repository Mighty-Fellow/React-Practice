import React , { Component} from 'react';

import Aux from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';
class OrderSummery extends Component {
    // this could be a functional component , doesn't have to be a calss
    componentWillUpdate(){
        console.log('[OrderSummery] willUpdate');
    }
    // componentDidUpdate(){

    // }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(igkey=>{
            return (<li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span> : {this.props.ingredients[igkey]}</li>)
        })
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious with the following Ingredients : </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Price : {this.props.price.toFixed(2)} $</strong></p>  
                <p>Continue to checkout ? </p>
                <Button btnType = "Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType = "Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummery