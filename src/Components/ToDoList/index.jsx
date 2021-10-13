import { Form, Field, Formik, ErrorMessage } from "formik";
import React from "react";
import { useState } from "react";


const data = [
 
  ]


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
}

const deleteTask = (id) => {
const filter = tasks.filter(task => 
  task.id !== id
)
return setTasks(filter)
}


const toggleCompletion = (checkbox) => {
 
}



const submitHandler = (values, formikBag) => {
  const {taskText} = values;
  addTask(taskText);
  formikBag.resetForm()
}

  return (
    <div>
      <h1>To Do List</h1>
      <Formik initialValues = {
         {taskText: ''}
      } onSubmit = {submitHandler}>
<Form>
  <Field name="taskText" placeholder="Enter new task"/>
  <ErrorMessage name="taskText">
    {(message) => <div style={{color:'red'}}>{message}</div>}
  </ErrorMessage>
</Form>
      </Formik>
      <ul>
        {tasks.map((task) => {
          return <li>
            {task.body}
            <button onClick={() => deleteTask(task.id)}> Delete Task</button>
            <Field name="checkbox" type="checkbox"/>
          </li>
          
      
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
