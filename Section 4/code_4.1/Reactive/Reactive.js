const obj = {
  name: "John Doe",
  age: 32,
  city: "Chicago",
  country: "US"
};

const makeReactive = (obj, observer) => {
  return new Proxy(obj, {
    set(target, key, value) {
      observer({
        [key]: value
      });
      return (target[key] = value);
    }
  });
}

const reactive = makeReactive(obj, res => console.log(res));
reactive.color = "Green";
reactive.age = 33;