import React from 'react';
import Modal from '../../components/UI/Modal/Modal'

import Aux from '../Auxi/Auxi';

const withErrorHandler = ( WrappedComponent)=>{
    return (props)=>{
        return (
            <Aux>
                <Modal>
                    Somethings didn't' work properly!
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
        )
    }
}

export default withErrorHandler;