import * as yup from "yup";
import ToDoList from "..";

export const TODO_SCHEMA = yup.object({
  taskText: yup
    .string()
    .matches(
      /^.{3,30}$/,
      "The field must contain a minimum of 3 characters and a maximum of 50"
    )
    .required(""),
});
