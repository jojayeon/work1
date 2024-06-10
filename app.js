class Person {
  constructor() {
    this._name = '';
    this._age = 0;
    this._job = '';
    this._home = '';
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value; 
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value; 
  }

  get job() {
    return this._job;
  }
  set job(value) {
    this._job = value; 
  }

  //속성을 반환하는 역할
  get home() {
    return this._home;
  }
  // 객체의 속성 값을 설정 변경 하는 등 움직임을 설정하는 느낌
  set home(value) {
    this._home = value;
  }
}

const person = new Person();
person.name = "조자연";
person.age = 26;
person.job = "조앤디 형";
person.home = "계룡"

console.log(person);
console.log("name:",person.name);
// console.log("name:",person._name);
console.log("age:",person.age);
console.log("job:",person.job);
console.log("home:",person.home);