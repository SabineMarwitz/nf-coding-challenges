interface NewLogger {
  log(message: string): void;
}

class LegacyLogger {
  writeLog(msg: string) {
    console.log(`Legacy: ${msg}`);
  }
}

class LoggerAdapter implements NewLogger {
  constructor(private legacy: LegacyLogger) {}

  log(message: string) {
    this.legacy.writeLog(message);
  }
}
