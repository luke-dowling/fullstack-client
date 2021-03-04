import { useEffect } from "react";
import { fetchTodos } from "../helpers/apiCalls";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Todo from "./Todo";

const Dashboard = () => {
  const { todos, setTodos } = useContext(UserContext);

  useEffect(() => {
    // Everything i right here it will run ONCE
    // Fetch todos
    // Render a list of todos and show
    const getData = async () => {
      let res = await fetchTodos();
      setTodos(res.data);
    };

    getData();
  }, [setTodos]);

  const todosList = todos.map((todo) => (
    <Todo key={todo.id} data={todo}></Todo>
  ));

  return (
    <div className="dashboard">
      <section>
        <h3>Dashboard</h3>
        <div className="todos-container">{todosList}</div>
      </section>
    </div>
  );
};

export default Dashboard;
