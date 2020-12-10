it("should calculate the monthly rate correctly", function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 6, rate: 7 })).toEqual(
    "170.49"
  );
  expect(
    calculateMonthlyPayment({ amount: 20000, years: 7, rate: 10 })
  ).toEqual("332.02");
});

it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 25789, years: 6, rate: 5 })).toEqual(
    "415.33"
  );
  expect(
    calculateMonthlyPayment({ amount: 5000, years: 4, rate: 2.3 })
  ).toEqual("109.13");
});

/// etc
