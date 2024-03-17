import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo.js";
import ExerciseTracker from "./ExerciseTracker.js";
import YouTubeThumbnail from './YouTubeThumbnail.js';
import { Paper, List, Container } from "@material-ui/core";
import { call } from "./service/ApiService";
import { useEffect } from "react";
import NavBar from './components/NavBar';

const App = () => {
  const [state, setState] = useState({ items: [] });

  // componentDidMount 대신 userEffect 사용
  useEffect(() => {
    call("/todo", "GET", null).then((response) =>
      setState({ items: response.data })
    );
  }, []);

  const add = (item) => {
    call("/todo", "POST", item).then((response) =>
      setState({ items: response.data })
    );
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      setState({ items: response.data })
    );
  };

  const update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      setState({ items: response.data })
    );
  };


  var todoItems = state.items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {this.state.items ? state.items.map((item, idx) => (
          <Todo
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            update={update}
          />
        )) : null}
      </List>
    </Paper>
  );

  // 3. props로 넘겨주기
  return (
    <div className='wrapper'>
      <NavBar />
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={add} />
          <div className="TodoList">{todoItems}</div>
          <ExerciseTracker />
          <YouTubeThumbnail />
        </Container>
      </div>
    </div>
  );
}

export default App;
