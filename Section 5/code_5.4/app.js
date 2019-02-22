const Middleware = require("./Middleware");

class Maths {
  add({a, b}) {
    return a + b;
  }
  subtract({a, b}) {
    return a - b;
  }
  multiply({a, b}) {
    return a * b;
  }
}

const calculator = new Maths();
const app = new Middleware(calculator);

app.use((req, next) => {
  req.a = req.a * 2;
  next();
});

app.use((req, next) => {
  req.b = req.b * 3;
  next();
});

console.log(app.add({a: 5, b: 10}));
