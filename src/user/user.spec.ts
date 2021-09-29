import { UserDTO } from './user';

describe('User', () => {
  it('should be defined', () => {
    expect(new UserDTO()).toBeDefined();
  });
});
