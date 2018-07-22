import React , {Component} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getItems,deleteItem} from  '../actions/itemAction';


class ShoppingList extends Component{

    componentDidMount(){
        this.props.getItems()
    }

    onDeleteClick= (id)=>{
        this.props.deleteItem(id);
    }
    
    render(){
        //items is the array 
        const {items} = this.props.item;
        return(
            <div className="container">
                
                    
                    <ul className="list-group">     
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id,name})=>(
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <li className="list-group-item">
                                    <button className="remove-btn btn-danger btn-sm" 
                                    onClick={this.onDeleteClick.bind(this,_id)
                                    }>&times;</button>
                                {name}</li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    </ul>    
            </div>
        )

    }
}


const mapStateToProps =(state)=>({
    item:state.item
})

export default connect(mapStateToProps,{ getItems ,deleteItem })(ShoppingList) ;