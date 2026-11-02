function TaskItem({ task, toggle, remove }) {
  return (
    <p>
      <span
        onClick={() => toggle(task.id)}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => remove(task.id)}>Delete</button>
    </p>
  );
}

export default TaskItem;
