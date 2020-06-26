function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
class Graph {
  addNote() {
    console.log("node added");
  }
}
const PI = 3.1415;

// export { add, substract, multiply, divide, PI };
export { add, substract, multiply as mt, divide, PI };
export default Graph;
