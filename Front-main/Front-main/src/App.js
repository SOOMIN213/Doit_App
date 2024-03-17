import React from 'react';
import { Paper, List, Container, Grid } from '@mui/material';
import Todo from './Todo';
import AddTodo from './AddTodo';
import ExerciseTracker from './components/ExerciseTracker'; // ExerciseTracker 컴포넌트를 import합니다.
import { call } from './service/ApiService';
import YouTubeThumbnail from './components/YouTubeThumbnail'; 
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    call("/todo", "GET", null).then((response) =>
      this.setState({ items: response.data })
    );
  }

  add = (item) => {
    call("/todo", "POST", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  delete = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  render() {
    return (
      <div className='wrapper'>
        <NavBar />

      <div className="App" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}  >
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <AddTodo add={this.add} />
              <List>
                {this.state.items ? this.state.items.map((item, idx) => (
                  <Todo
                    item={item}
                    key={item.id}
                    delete={this.delete}
                    update={this.update}
                  />
                )) : null}
              </List>
            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>
        </Container>
      </div>
      </div>
    );
  }
}

export default App;
