import React, { Component } from "react";
import TaskItem from "./TaskItem";

class App extends Component {
  state = { text: "", tasks: [] };

  addTask = () => {
    if (!this.state.text.trim()) return;
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: Date.now(), text: this.state.text, done: false },
      ],
      text: "",
    });
  };

  toggleTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t,
      ),
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((t) => t.id !== id),
    });
  };

  render() {
    const { text, tasks } = this.state;
    return (
      <div>
        <input
          value={text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={this.addTask}>Add</button>
        <p>
          {tasks.filter((t) => t.done).length} of {tasks.length} tasks done
        </p>

        {tasks.length === 0
          ? "No tasks yet. Add one!"
          : tasks.map((t) => (
              <TaskItem
                key={t.id}
                task={t}
                toggle={this.toggleTask}
                remove={this.deleteTask}
              />
            ))}
      </div>
    );
  }
}

export default App;
