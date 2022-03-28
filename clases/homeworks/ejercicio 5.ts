class Person {
    protected name: string;
    protected age: number;
    //private mail: string;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Student extends Person {
    private regular: boolean;
    
    constructor(name: string, age: number, regular: boolean) {
      super(name, age);
      this.regular = regular;
    }
    
    getFullInfo() {
      return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;
    }
    getName(): string {
      return this.name 
    }
    getAge(): number {
      return this.age
    }
    getRegular(): boolean {
      return this.regular
    }
    setAge(set: number): void {
      this.age = set;
    }
    setRegular(set: boolean): void {
      this.regular = set;
    }
  }
  
  const student = new Student("Franco", 26, true);
  
  student.getFullInfo(); // "Franco (26 years old) - not regular"
  student.getName(); // Property 'name' is protected and only accessible within class 'Person' and its subclasses
  student.getAge(); // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
  student.getRegular(); // Property 'regular' is private and only accessible within class 'Student'
  student.setRegular(false);
  let table = Object.fromEntries(Object.entries(student))
  console.table(table)
  table.name = student.getName();
  table.age = student.getAge()
  table.regular = student.getRegular()
  console.table(table);

//proba como cambiar los modificadores de atributos de la clase!
  student.setAge(24);
  console.log(student.getAge())
  export {student}