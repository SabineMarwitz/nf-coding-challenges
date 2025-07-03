// Adapter Exercises
// 3. Weather API Adapter
//
// Task: Create a class OldWeatherService with a method fetch() that
// returns weather info in a custom format. Then write an adapter
// WeatherAdapter that adapts it to the new interface WeatherClient
// with a method getCurrentWeather().

interface WeatherClient {
  getCurrentWeather(): string;
}

class OldWeatherService {
  fetch(): string {
    //...
    return "Heute viel Sonne.";
  }
}

class WeatherAdapter implements WeatherClient {
  private legacy: OldWeatherService;

  constructor(legacy: OldWeatherService) {
    this.legacy = legacy;
  }

  getCurrentWeather(): string {
    return this.legacy.fetch();
  }
}

// Test
const WeatherInfo = new WeatherAdapter(new OldWeatherService());
console.log(WeatherInfo.getCurrentWeather());
