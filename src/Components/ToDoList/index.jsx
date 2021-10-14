import { Form, Field, Formik, ErrorMessage } from "formik";
import React, { useCallback } from "react";
import { useState } from "react";
import { TODO_SCHEMA } from "./Validation";
const data = [];

const ToDoList = () => {
  const [tasks, setTasks] = useState(data);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      isDone: false,
      body: text,
    };

    const newTasks = [...tasks, newTask];

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const filter = tasks.filter((task) => task.id !== id);
    return setTasks(filter);
  };

  const [completedTasks, setCompetedTasks] = useState([]);
  const toggleCompletion = (taskId) => {
    const newCompletedTaskList = [...completedTasks];
    if (completedTasks.indexOf(taskId) != -1) {
    } else {
      newCompletedTaskList.push(taskId);
    }
    setCompetedTasks(newCompletedTaskList);
  };

  const submitHandler = (values, formikBag) => {
    const { taskText } = values;
    addTask(taskText);
    formikBag.resetForm();
  };

  return (
    <div>
      <h1>To Do List</h1>
      <Formik validationSchema={TODO_SCHEMA} initialValues={{ taskText: "" }} onSubmit={submitHandler}>
        <Form>
          <Field name="taskText" placeholder="Enter new task" />
          <ErrorMessage name="taskText">
            {(message) => <div style={{ color: "red" }}>{message}</div>}
          </ErrorMessage>
        </Form>
      </Formik>
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              {task.body}
              <button onClick={() => deleteTask(task.id)}> Delete Task</button>
              <input type="checkbox" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
