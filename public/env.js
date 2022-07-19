class DM_Environment {
    constructor() {
      this.API_URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=1af8a94463f618c96c8812f9655463d0';
    }
  }
  window.DM_ENV = new DM_Environment();
  window.DM_Env = DM_Environment;
  