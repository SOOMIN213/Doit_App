import React from 'react';
import { TextField, Paper, Button, Select, MenuItem } from '@mui/material';


const routines = [
  { value: 'routine1', label: '가슴' },
  { value: 'routine2', label: '등' },
  { value: 'routine3', label: '하체' },
  { value: 'routine4', label: '어깨' },
  { value: 'routine5', label: '팔' },
  { value: 'routine6', label: '코어' },
  { value: 'routine7', label: '유산소' },
  { value: 'routine8', label: '스트레칭' },
  { value: 'routine9', label: '홈트' },
];

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: { title: '', count: 1 } };
    this.add = props.add;
  }

  onInputChange = (e) => {
    const thisItem = this.state.item;
    thisItem.count = e.target.value;
    this.setState({ item: thisItem });
    console.log(thisItem);
  };

  onRoutineChange = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
    console.log(thisItem);
  };

  onButtonClick = () => {
    for (let i = 0; i < this.state.item.count; i++) {
      this.add(this.state.item.title);
    }
    this.setState({ item: { title: '' } });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onButtonClick();
    }
  };

  render() {
    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select
            value={this.state.item.title}
            onChange={this.onRoutineChange}
            style={{
              marginRight: 16,
              flexGrow: 1,
              flexShrink: 1,
            }}
          >
            {routines.map((routine) => (
              <MenuItem key={routine.value} value={routine.value}>
                {routine.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            placeholder='Count'
            type='number'
            onChange={this.onInputChange}
            value={this.state.item.count}
            onKeyDown={this.handleKeyDown}
            style={{
              marginRight: 16,
              flexGrow: 0,
              flexShrink: 0,
            }}
          />
          <Button
            color='secondary'
            variant='outlined'
            onClick={this.onButtonClick}
            style={{
              flexGrow: 0,
              flexShrink: 0,
            }}
          >
            Add
          </Button>
        </div>
      </Paper>
    );
  }
}

export default AddTodo;
