interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  age: string;
}

interface Admin {
  name: string;
  age: boolean;
}

// 타입의 반복을 줄이기 위해 generic 사용
interface Anyone<T> {
  name: string;
  age: T;
}

const josh: Admin = {
  name: 'josh',
  age: false,
};

const lucas: Anyone<number> = {
  name: 'lucas',
  age: 27,
};

function getText<T>(text: T) {
  return text;
}
const message = getText<string>('hi');
const useId = getText<number>(10);
