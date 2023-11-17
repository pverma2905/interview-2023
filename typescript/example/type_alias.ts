/// variable

type variable = string | number | boolean | undefined | null;

let a: variable = "pranav";
let b: variable = 123;
let c: variable = true;
let d: variable = undefined;
let e: variable = null;

// function

function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);

function add1(): number {
  // return "vvvvvvvv";
  return 50;
}

add1();

function add2(): undefined {
  // return "vvvvvvvv";
  return;
}

add2();
