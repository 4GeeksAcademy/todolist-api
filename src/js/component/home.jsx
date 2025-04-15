import React from "react";
//include images into your bundle
import { TodoListFetch  } from "./TodoListFetch";
//create your first component
const Home = () => {
    return (
        <div className="text-center">
            <TodoListFetch />
        </div>
    );
};
export default Home;