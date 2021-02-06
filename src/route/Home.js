import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../store";
import ToDo from "../component/ToDo";

function Home({ todos, addToDo }) {
  const [text, setText] = useState("");
  function OnChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <div>
      <h1>TO DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={OnChange}></input>
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  //store 에서 props 로 데이터를 가져옴
  return { todos: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreater.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
