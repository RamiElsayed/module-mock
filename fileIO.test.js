const FileIO = require("./fileIO");

describe('FileIO', () => {
  describe('Initialize', () => {
    test('should initialize new fileIO object', () => {
      const fileIO = new FileIO();

      expect(fileIO).toEqual({});
      expect(fileIO).toBeInstanceOf(FileIO);
    })
  });
  describe('read', () =>  {
    test('should call readFileSync with the expected arguments', () => {});
  })
  describe('write', () => {
    test('should call writeFileSync eith the expected arguments', () =>{});
    
  })
});
