it('should spyOn spyOnMe', () => {
  const mockedValue = 'Thanks for helping!';
  jest.spyOn(window, 'spyOnMe').mockReturnValue(mockedValue);
  expect(spyOnMe()).toBe(mockedValue); // OK
  const result = main();
  expect(result).toBe(mockedValue); // KO
});