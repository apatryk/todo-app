import axios from 'axios';

export type tasksType = {
  "title": string;
  "date": string;
  "description": string;
  "id": number;
}

export const addTask = (values: any) => {
  axios
    .post("http://localhost:4000/tasks", {
      date: values.date,
      description: values.description,
      title: values.title,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getTasks = async () => {
  return await axios.get(
    "http://localhost:4000/tasks"
  );
};

export const getTaskById = async (value?: string) => {
  return await axios.get("http://localhost:4000/tasks?id=" + value)
}