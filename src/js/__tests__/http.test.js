import fetchData from '../http';

test('fetch in this project should throw error', () => {
  expect(() => { fetchData(1); }).toThrow('Mock this! 1');
});
