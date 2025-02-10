const helloWorld = require("../index");

test("Debe retornar 'Hola Mundo'", () => {
    expect(helloWorld()).toBe("Hola Mundo");
});
// Angel Manuel Valdez Santos 2021-2143