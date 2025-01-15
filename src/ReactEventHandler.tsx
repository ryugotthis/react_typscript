import { ChangeEvent, MouseEvent, useState } from 'react';

const ButtonHandler = () => {
  const showAlert = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    e.target;
  };
  return <button onClick={showAlert}>show</button>;
};

const InputHandler = () => {
  // useState와 같이 자동으로 타입이 추론되는 경우 굳이 제네릭을 안쓰는게 좋다
  const [todo, setTodo] = useState('');

  const UpdateTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return <input type="text" value={todo} onChange={UpdateTodo} />;
};
export { ButtonHandler, InputHandler };
