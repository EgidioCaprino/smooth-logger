import { createLogger } from '../src/index';

describe('createLogger', () => {
  it('should provide an object', () => {
    const logger = createLogger(false);
    expect(logger).toEqual(expect.objectContaining({
      log: expect.any(Function),
    }));
  });
});
