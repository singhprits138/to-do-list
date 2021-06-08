import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () =>{
  const [inputList,setInputList] = useState("");
  const [itmes,setItems] = useState([]);
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }
  const listofItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };
  const deleteItems = (id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrayElem,index)=>{
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="main_div">
          <div className="center_div">
              <br/>
              <h1>TO DO List</h1>
              <br/>
              <input type="text" className="add_item" placeholder="Add an item" value={inputList} onChange={itemEvent}/>
              <button className="add_btn" onClick={listofItems}>+</button>
              <ol>{itmes.map((val,index)=>{
                return <ToDoList 
                key ={index}
                id={index}
                text={val}
                onSelect={deleteItems}/>;
              })
                }
              </ol>
          </div>
      </div>
    </>
  );
};

export default App;