import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/itemAction";
import uuid from "uuid";

class ItemModal extends Component {
    state={
      name:''
    }

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };


    onSubmit = e=>{
      e.preventDefault();

      const newItem  = {
         
         name:this.state.name
      }

      //Adding Item via  addItem action
      this.props.addItem(newItem);

    }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Item
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Item
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

              <form onSubmit={this.onSubmit}>

              <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="name" onChange={this.onChange} class="form-control" type="text" placeholder="Default input" onChange={this.onChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps =state =>({
  item:state.item
})
export default connect(mapStateToProps,{addItem})(ItemModal);
