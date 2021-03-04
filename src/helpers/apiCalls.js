import axios from "axios";
const serverUrl = `http://localhost:5000`;

export const fetchTodos = async () => {
  console.log(`im fetching todos`);
  const data = await axios.get(`${serverUrl}/todos`);
  return data;
};

export const fetchTodo = async (id) => {
  console.log(`im fetching a todo`);
  const data = await axios.get(`${serverUrl}/todo/${id}`);
  return data;
};
