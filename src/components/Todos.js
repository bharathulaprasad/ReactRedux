import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      <ul className="text-ellipsis">
        {todos.map((todo) => (
          <li className="mt-4 flex justify-between items-center
          bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
            <div className="text-white flex items-center bg-zinc-950">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0
        py-1 px-4 focus:outline-none hover:bg-red-600 rounded"
            >
              <svg
                xmlns="http://w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26  9m9.968-3.21c.342.052.682.107 1.022
        .166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084 c-.957 0-1.687-.784-1.687-1.932 0-.143.024-.273.05-.39
        .023-.065.05-.125.138-.188 .154-.122.308-.398.308-.613v-2.338c0-.222-.045-.334-.14-.436-.093-.102-.24-.16-.436-.16
        -.148 0-.288.033-.43.098-.14.065-.276.107-.45.107-.138 0-.277-.038-.403-.117-.12-.076-.21-.187-.21-.336
        0-.14.008-.28.032-.418.028-.17.053-.372.053-.586v-2.338c0-.241.055-.362.16-.436.103-.073.24-.124.428-.124z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
