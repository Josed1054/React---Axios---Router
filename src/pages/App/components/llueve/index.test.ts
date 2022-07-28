import { llueve } from ".";

describe("Posibles casos de funcion llueve", () => {
  test("Debe llover, ambos son mayores", () => {
    expect(llueve(70, 80)).toBe("Si");
  });

  test("NO Debe llover, ambos son menores", () => {
    expect(llueve(30, 40)).toBe("No");
  });

  test("Debe llover, uno es mayor", () => {
    expect(llueve(70, 40)).toBe("Si");
  });
});
