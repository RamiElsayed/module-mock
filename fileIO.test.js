const FileIO = require("./fileIO");
const fs = require('fs');

jest.mock('fs');
describe('FileIO', () => {
  let fileIO;
  beforeEach(() => {
    jest.clearAllMocks();
    fileIO = new FileIO();
  })
  describe('Initialize', () => {
    test('should initialize new fileIO object', () => {

      expect(fileIO).toEqual({});
      expect(fileIO).toBeInstanceOf(FileIO);
    })
  });
  describe('read', () =>  {
    test('should call readFileSync with the expected arguments', () => {
      fs.readFileSync.mockReturnValue('a mock');

      const dataFromFile = fileIO.read('food.txt');

      expect(dataFromFile).toEqual('a mock');
      expect(fs.readFileSync).toHaveBeenCalledWith('food.txt', 'utf8');
    });
  })
  describe('write', () => {
    test('should call writeFileSync eith the expected arguments', () =>{
      fs.writeFileSync.mockReturnValue('success');
      
      const result = fileIO.write('foo.text', 'This is a write mock');

      expect(result).toEqual('success');
      expect(fs.writeFileSync).toHaveBeenCalledWith('foo.text', 'This is a write mock');
    });
    
  })
});
