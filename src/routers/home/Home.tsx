import { useState, ChangeEvent } from "react";
import { ITask } from "../../interfaces";

function Home() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
    };

    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);

    // console.log(todoList);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div>
      <div className="header">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          value={deadline}
          placeholder="Deadline (in days...)"
          name="deadline"
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList?.map((item: ITask, inx: number) => (
          <p key={inx}>
            {item.taskName} {item.deadline}
            <button
              onClick={() => {
                completeTask(item.taskName);
              }}
            >
              x
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Home;
