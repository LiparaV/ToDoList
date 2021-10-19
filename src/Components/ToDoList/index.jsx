import { Form, Field, Formik, ErrorMessage } from "formik";
import React, { useCallback } from "react";
import { useState } from "react";
import { TODO_SCHEMA } from "./Validation";
import cx from "classnames";
import styles from "./styles.module.scss";

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

  const toggleCompletion = (i) => {
    const newTasks = tasks.map((task) => {
      const newTask = {
        ...task,
        isDone: task.id === i ? !task.isDone : task.isDone,
      };
      return newTask;
    });
    setTasks(newTasks);
  };

  const submitHandler = (values, formikBag) => {
    const { taskText } = values;
    addTask(taskText);
    formikBag.resetForm();
  };

  return (
    <div>
      <main className={styles.listWrapper}>
        <h1>To Do List</h1>
        <Formik
          validationSchema={TODO_SCHEMA}
          initialValues={{ taskText: "" }}
          onSubmit={submitHandler}
        >
          <Form>
            <Field name="taskText" placeholder="Enter new task" />
            <ErrorMessage name="taskText">
              {(message) => <div style={{ color: "red" }}>{message}</div>}
            </ErrorMessage>
          </Form>
        </Formik>
        <ul className={styles.ulWrapper}>
          {tasks.map((task) => {
            const classNames = cx(styles.liWrapper,{
              [styles.done]: task.isDone,
              [styles.unDone]: !task.isDone,
              
            });
            return (
              <div className={styles.taskWrapper}>
                
                <li className={classNames}>
                <div className={styles.textWrapper}>
                  <div onClick={() => toggleCompletion(task.id)}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      checked={task.isDone}
                    />
                  </div>

                  <div>{task.body}</div>
              </div>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteTask(task.id)}
                  />
                </li>
              </div>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default ToDoList;
