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
      date: values.dateString.format("YYYY-MM-DD"),
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

export const getTodayTasks = async (todayDate: String) => {
  return await axios.get(
    "http://localhost:4000/tasks?date=" + todayDate
  );
};

 export const updateTask = (taskId: number | undefined, updatedDate: String | null | undefined) => {
  axios.patch('http://localhost:4000/tasks/' + taskId, {
    date: updatedDate
})
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
 }
