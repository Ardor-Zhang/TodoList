import { createStore, combineReducers } from 'redux';


// 第一个参数： state对象， 
// 第二个参数： action : 1. type: 任务的名字（大写） 2. payload: 数据载荷
function listReducer(list = [], action) {
  if (action.type === "ADD_LIST") {
    return [ 
      {
        id: Date.now(),
        isDone: false,
        content: action.payload
      },
      ...list 
    ]
  } else if (action.type === "CHANGE_STATE") {
    let list_ = [ ...list ];
    list_.forEach(item=>{
      if(item.id === action.payload) item.isDone = !item.isDone;
      return item;
    });
    return list_;
  } else if (action.type === "DELETE_LIST") {
    return list.filter(item=>{
      return item.id !== action.payload
    });
  }
  return list;
}

const reducer = combineReducers({
  list : listReducer
})

// 第一个参数： reducer函数（ 相当于vuex中的 mutations ）
// 第二个参数： 初始的状态
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;