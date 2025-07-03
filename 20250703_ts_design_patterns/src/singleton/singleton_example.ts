//Singleton
class ConfigService {
  private static instance: ConfigService;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new ConfigService();
    }

    return this.instance;
  }
}
const configService = ConfigService.getInstance();

ConfigService.getInstance();
ConfigService.getInstance();
ConfigService.getInstance();
