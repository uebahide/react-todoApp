import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;

  return (
    <section className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={index}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
