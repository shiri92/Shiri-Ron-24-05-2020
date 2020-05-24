const dummyFavorites = [
  {
    id: "215854",
    name: "Tel Aviv",
    currWeather: {
      Temperature: {
        Metric: { Unit: "C", UnitType: 17, Value: 26.6 },
        Imperial: { Unit: "F", UnitType: 18, Value: 79.88 },
      },
      WeatherText: "Partly sunny",
    },
  },
  {
    id: "202396",
    name: "Delhi",
    currWeather: {
      Temperature: {
        Metric: { Unit: "C", UnitType: 17, Value: 42.2 },
        Imperial: { Unit: "F", UnitType: 18, Value: 107.96 },
      },
      WeatherText: "Sunny",
    },
  },
  {
    id: "226396",
    name: "Tokyo",
    currWeather: {
      Temperature: {
        Metric: { Unit: "C", UnitType: 17, Value: 15.4 },
        Imperial: { Unit: "F", UnitType: 18, Value: 59.72 },
      },
      WeatherText: "Cloudy",
    },
  },
  {
    id: "7894",
    name: "Buenos Aires",
    currWeather: {
      Temperature: {
        Metric: { Unit: "C", UnitType: 17, Value: 16.1 },
        Imperial: { Unit: "F", UnitType: 18, Value: 60.98 },
      },
      WeatherText: "Cloudy",
    },
  },
  {
    id: "235049",
    name: "Cancún",
    currWeather: {
      Temperature: {
        Metric: { Unit: "C", UnitType: 17, Value: 27.9 },
        Imperial: { Unit: "F", UnitType: 18, Value: 82.22 },
      },
      WeatherText: "Partly sunny",
    },
  },
  {
    id: "349727",
    name: "New York",
    currWeather: {
      Temperature: {
        Metric: { Unit: "C", UnitType: 17, Value: 18.3 },
        Imperial: { Unit: "F", UnitType: 18, Value: 64.94 },
      },
      WeatherText: "Partly sunny",
    },
  },
  {
    id: "307297",
    name: "Barcelona",
    currWeather: {
      Temperature: {
        Metric: { Unit: "C", UnitType: 17, Value: 25.6 },
        Imperial: { Unit: "F", UnitType: 18, Value: 78.08 },
      },
      WeatherText: "Sunny",
    },
  },
  {
    id: "213490",
    name: "Rome",
    currWeather: {
      Temperature: {
        Metric: { Unit: "C", UnitType: 17, Value: 28.9 },
        Imperial: { Unit: "F", UnitType: 18, Value: 84.02 },
      },
      WeatherText: "Sunny",
    },
  },
];

const dummyLocations = [
  {
    Version: 1,
    Key: "28143",
    Type: "City",
    Rank: 10,
    LocalizedName: "Dhaka",
    Country: { ID: "BD", LocalizedName: "Bangladesh" },
    AdministrativeArea: { ID: "C", LocalizedName: "Dhaka" },
  },
  {
    Version: 1,
    Key: "202396",
    Type: "City",
    Rank: 10,
    LocalizedName: "Delhi",
    Country: { ID: "IN", LocalizedName: "India" },
    AdministrativeArea: { ID: "DL", LocalizedName: "Delhi" },
  },
  {
    Version: 1,
    Key: "58185",
    Type: "City",
    Rank: 13,
    LocalizedName: "Dongguan",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "GD", LocalizedName: "Guangdong" },
  },
  {
    Version: 1,
    Key: "102133",
    Type: "City",
    Rank: 13,
    LocalizedName: "Dalian",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "LN", LocalizedName: "Liaoning" },
  },
  {
    Version: 1,
    Key: "60971",
    Type: "City",
    Rank: 13,
    LocalizedName: "Deyang",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "SC", LocalizedName: "Sichuan" },
  },
  {
    Version: 1,
    Key: "60631",
    Type: "City",
    Rank: 13,
    LocalizedName: "Dezhou",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "SD", LocalizedName: "Shandong" },
  },
  {
    Version: 1,
    Key: "61417",
    Type: "City",
    Rank: 13,
    LocalizedName: "Dali Prefecture",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "YN", LocalizedName: "Yunnan" },
  },
  {
    Version: 1,
    Key: "2333431",
    Type: "City",
    Rank: 15,
    LocalizedName: "Dazhou",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "SC", LocalizedName: "Sichuan" },
  },
  {
    Version: 1,
    Key: "106771",
    Type: "City",
    Rank: 15,
    LocalizedName: "Datong",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "SX", LocalizedName: "Shanxi" },
  },
  {
    Version: 1,
    Key: "297442",
    Type: "City",
    Rank: 20,
    LocalizedName: "Dakar",
    Country: { ID: "SN", LocalizedName: "Senegal" },
    AdministrativeArea: { ID: "DK", LocalizedName: "Dakar" },
  },
];

const dummyCurrLocation = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  // {
  //   Version: 1,
  //   Key: "226396",
  //   Type: "City",
  //   Rank: 10,
  //   LocalizedName: "Tokyo",
  //   Country: { ID: "JP", LocalizedName: "Japan" },
  //   AdministrativeArea: { ID: "13", LocalizedName: "Tokyo" },
  // },
  // {
  //   Version: 1,
  //   Key: "106770",
  //   Type: "City",
  //   Rank: 11,
  //   LocalizedName: "Taiyuan",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "SX", LocalizedName: "Shanxi" },
  // },
  // {
  //   Version: 1,
  //   Key: "106780",
  //   Type: "City",
  //   Rank: 11,
  //   LocalizedName: "Tianjin",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "TJ", LocalizedName: "Tianjin" },
  // },
  // {
  //   Version: 1,
  //   Key: "58491",
  //   Type: "City",
  //   Rank: 13,
  //   LocalizedName: "Tongren",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "GZ", LocalizedName: "Guizhou" },
  // },
  // {
  //   Version: 1,
  //   Key: "102324",
  //   Type: "City",
  //   Rank: 13,
  //   LocalizedName: "Tangshan",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "HE", LocalizedName: "Hebei" },
  // },
  // {
  //   Version: 1,
  //   Key: "59573",
  //   Type: "City",
  //   Rank: 13,
  //   LocalizedName: "Taizhou",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "JS", LocalizedName: "Jiangsu" },
  // },
  // {
  //   Version: 1,
  //   Key: "60198",
  //   Type: "City",
  //   Rank: 13,
  //   LocalizedName: "Tongliao",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "NM", LocalizedName: "Inner Mongolia" },
  // },
  // {
  //   Version: 1,
  //   Key: "106571",
  //   Type: "City",
  //   Rank: 13,
  //   LocalizedName: "Tai'an",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "SD", LocalizedName: "Shandong" },
  // },
  // {
  //   Version: 1,
  //   Key: "58055",
  //   Type: "City",
  //   Rank: 15,
  //   LocalizedName: "Tianshui",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "GS", LocalizedName: "Gansu" },
  // },
  // {
  //   Version: 1,
  //   Key: "2333653",
  //   Type: "City",
  //   Rank: 15,
  //   LocalizedName: "Taizhou",
  //   Country: { ID: "CN", LocalizedName: "China" },
  //   AdministrativeArea: { ID: "ZJ", LocalizedName: "Zhejiang" },
  // },
];

const dummyCurrWeather = [
  {
    LocalObservationDateTime: "2020-05-23T16:56:00+09:00",
    EpochTime: 1590220560,
    WeatherText: "Mostly cloudy",
    WeatherIcon: 6,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: { Value: 21.1, Unit: "C", UnitType: 17 },
      Imperial: { Value: 70, Unit: "F", UnitType: 18 },
    },
    MobileLink:
      "http://m.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us",
    Link:
      "http://www.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us",
  },
  {
    LocalObservationDateTime: "2020-05-20T16:05:00+03:00",
    EpochTime: 1589979900,
    WeatherText: "Mostly sunny",
    WeatherIcon: 2,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 41.1,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 106,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  },
];

const dummyCurr5DaysForecast = {
  Headline: {
    EffectiveDate: "2020-05-20T08:00:00+03:00",
    EffectiveEpochDate: 1589950800,
    Severity: 3,
    Text: "The heat wave will continue through Thursday",
    Category: "heat",
    EndDate: "2020-05-21T20:00:00+03:00",
    EndEpochDate: 1590080400,
    MobileLink:
      "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
    Link:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2020-05-20T07:00:00+03:00",
      EpochDate: 1589947200,
      Temperature: {
        Minimum: {
          Value: 73,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 106,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 30,
        IconPhrase: "Hot",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 37,
        IconPhrase: "Hazy moonlight",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    },
    {
      Date: "2020-05-21T07:00:00+03:00",
      EpochDate: 1590033600,
      Temperature: {
        Minimum: {
          Value: 71,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 94,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    },
    {
      Date: "2020-05-22T07:00:00+03:00",
      EpochDate: 1590120000,
      Temperature: {
        Minimum: {
          Value: 69,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 85,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    },
    {
      Date: "2020-05-23T07:00:00+03:00",
      EpochDate: 1590206400,
      Temperature: {
        Minimum: {
          Value: 67,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 78,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    },
    {
      Date: "2020-05-24T07:00:00+03:00",
      EpochDate: 1590292800,
      Temperature: {
        Minimum: {
          Value: 64,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 76,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    },
  ],
};

export default {
  dummyFavorites,
  dummyCurrLocation,
  dummyLocations,
  dummyCurrWeather,
  dummyCurr5DaysForecast,
};
