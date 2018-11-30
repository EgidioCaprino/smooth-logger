import { createLogger } from '../src/index';

describe('createLogger', () => {
  it('should provide an object', () => {
    const logger = createLogger(false);
    expect(logger).toEqual(expect.objectContaining({
      log: expect.any(Function),
    }));
  });
});

describe('.log', () => {
  it('should log into console when enabled', () => {
    global.console = {
      log: jest.fn(),
    };
    const messages = ['first', 'second', 'third'];
    createLogger(true).log(...messages);
    expect(global.console.log).toHaveBeenCalledWith(...messages);
  });

  it('should not log into console when disabled', () => {
    global.console = {
      log: jest.fn(),
    };
    const messages = ['first', 'second', 'third'];
    createLogger(false).log(...messages);
    expect(global.console.log).toHaveBeenCalledTimes(0);
  });
});
