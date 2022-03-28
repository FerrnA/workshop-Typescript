  function infoInstructor(inst: Instructor): void {
    console.log(`${inst.name} - ${inst.age} years old`);
  }
  //const noTypeVar: Instructor = {name: "Franco", age: 26};
  //infoInstructor(noTypeVar); // "Franco - 26 years old"
  
  interface Instructor {
      name: string;
      age: number;
  }
    
  class Person {
    constructor(public name: string, public age: number) {
      this.name = name;
      this.age = age;
    }
  }

  class Instructor extends Person implements Instructor {
    private email
    protected UUID: symbol
    constructor(email: string, public name: string, public age: number) {
      super(name, age);
      this.email = email;
      this.UUID;
    }
    getEmail(): string {
      return `The instructor email is: ${this.email}`
    }
    setUUID(): void {
      if(!this.UUID) this.UUID = Symbol(this.email)
    }
    getUUID(): symbol {
      return this.UUID
    }
  }
  
  let persona1 = new Instructor("as@as.com", "cecilia", 23)
  persona1.setUUID();