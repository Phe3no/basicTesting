const functions = require("./functions");

test("Adds 2 + 2  to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2  to NOT equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the oposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

//ToBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual
test("User should be Michel van de Kant object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Michel",
    lastName: "van de Kant",
  });
});

// Less than and greater than **!!** not calling a function here **!!**
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThan(1600);
});
