import getLevel from '../index';
import fetchData from '../js/http';

jest.mock('../js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel should call fetchData', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  getLevel('id');
  expect(fetchData).toHaveBeenCalled();
});

test('getLevel should return message with level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  expect(getLevel('id')).toBe('Ваш текущий уровень: 1');
});

test('getLevel should return error message', () => {
  fetchData.mockReturnValue({ status: 'error', level: 1 });
  expect(getLevel('id')).toBe('Информация об уровне временно недоступна');
});
