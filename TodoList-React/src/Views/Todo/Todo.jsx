import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const TodoUI = (props) => {
  
  const handleChange = (id) => {
    props.CHANGE_STATE(id);
  }
  
  const handleClick = (id) => {
    props.CHANGE_STATE(id);
  }
  
  return (
    <>
      <ul>
        {
          props.list.filter(data => 
            data.isDone === false
          ).map(item=>{
            return(
              <li key={ item.id } className={item.isDone ? "isdone" : ""}>
                <div className="box_content">
                  <div><input type="checkbox" checked={ item.isDone } onChange={ () => handleChange(item.id) }/></div>
                  <div>{ item.content }</div>
                </div>
                <div><button onClick={ () => handleClick(item.id) }>删除</button></div>
              </li>
            )
          })
        }
      </ul>
      
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    list: state.list
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    CHANGE_STATE: id => dispatch({ type: "CHANGE_STATE", payload: id }),
    DELETE_LIST: id => dispatch({ type: "DELETE_LIST", payload: id }),
  }
}
 
const Todo = connect( mapStateToProps, mapDispatchToProps )( TodoUI );

TodoUI.propTypes = {
  list: PropTypes.array
};

export default Todo;