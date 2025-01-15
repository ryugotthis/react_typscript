const ReactApi = () => {
  const apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  // {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // }

  interface Todo {
    useId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  //TODO: 아래 API 함수의 타입을 정의해 보세요.

  async function fetchTodos(): Promise<Todo[]> {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }

  const completed: object = fetchTodos();
  console.log(completed);

  return <div></div>;
};

export default ReactApi;
