import React from "react";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./styles.module.scss";
import { useState } from "react";
import ToDoList from "Components/ToDoList";

function App(props) {
  return (
    <BrowserRouter>
      <ToDoList />
    </BrowserRouter>
  );
}

export default App;
