const createPerson = (callback) => {
  let person = {}; 
  callback(person, setName);
};
//매개변수가 존재 하지 않는 콜백인가?

const setName = (person, callback) => {
  person.name = "조자연";
  callback(person, setAge);
}
const setAge = (person, callback) => {
  person.age = 26;
  callback(person, setJob);
};
const setJob = (person) => {
  person.job = "앤디 형";
  console.log(person);
}

createPerson((person, callback) => callback(person, setName));

// a(person, callback) => {
//   callback(person, setName)
// }

// psrson이라는 매개변수를 가지고 있는 콜백함수를 실행해 달라 -> 
// createPerson(callback(person));
//실행시 
// 23번에서 1번의 콜백함수를 작동시킨다 
//그러면 person이 빈공간으로 생서되고 콜백함수인 setname를 실행해서 7번이 작동하면 이후는 반복적으로 작동한다