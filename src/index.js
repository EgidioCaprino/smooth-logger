export const createLogger = enabled => ({
  log(...messages) {
    if (enabled) {
      console.log(...messages);
    }
  },
});
