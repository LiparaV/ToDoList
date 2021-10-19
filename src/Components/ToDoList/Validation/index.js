import * as yup from "yup";
import ToDoList from "..";

export const TODO_SCHEMA = yup.object({
  taskText: yup
    .string()
    .matches(
      /^.{3,30}$/,
      "Enter 3 to 30 characters"
    )
    .required(""),
});
