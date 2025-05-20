import React, { useState, useEffect } from "react";

const Weather = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_WEATHER_API;

const countries = {
  IN: { name: "India", cities: ["Delhi", "Mumbai", "Bangalore", "Chennai"] },
  US: { name: "United States", cities: ["New York", "Los Angeles", "Chicago", "Houston"] },
  AU: { name: "Australia", cities: ["Sydney", "Melbourne", "Brisbane", "Perth"] },
  CA: { name: "Canada", cities: ["Toronto", "Vancouver", "Montreal", "Calgary"] },
  GB: { name: "United Kingdom", cities: ["London", "Manchester", "Birmingham", "Liverpool"] },
  DE: { name: "Germany", cities: ["Berlin", "Munich", "Hamburg", "Frankfurt"] },
  FR: { name: "France", cities: ["Paris", "Lyon", "Marseille", "Nice"] },
  IT: { name: "Italy", cities: ["Rome", "Milan", "Naples", "Florence"] },
  ES: { name: "Spain", cities: ["Madrid", "Barcelona", "Seville", "Valencia"] },
  BR: { name: "Brazil", cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"] },
  RU: { name: "Russia", cities: ["Moscow", "Saint Petersburg", "Novosibirsk", "Kazan"] },
  CN: { name: "China", cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"] },
  JP: { name: "Japan", cities: ["Tokyo", "Osaka", "Kyoto", "Nagoya"] },
  KR: { name: "South Korea", cities: ["Seoul", "Busan", "Incheon", "Daegu"] },
  MX: { name: "Mexico", cities: ["Mexico City", "Guadalajara", "Monterrey", "Cancún"] },
  ZA: { name: "South Africa", cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria"] },
  AR: { name: "Argentina", cities: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"] },
  NG: { name: "Nigeria", cities: ["Lagos", "Abuja", "Kano", "Port Harcourt"] },
  EG: { name: "Egypt", cities: ["Cairo", "Alexandria", "Giza", "Luxor"] },
  TR: { name: "Turkey", cities: ["Istanbul", "Ankara", "Izmir", "Antalya"] },
  SA: { name: "Saudi Arabia", cities: ["Riyadh", "Jeddah", "Dammam", "Mecca"] },
  AE: { name: "United Arab Emirates", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain"] },
  ID: { name: "Indonesia", cities: ["Jakarta", "Surabaya", "Bandung", "Medan"] },
  TH: { name: "Thailand", cities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"] },
  PK: { name: "Pakistan", cities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"] },
  BD: { name: "Bangladesh", cities: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"] },
  VN: { name: "Vietnam", cities: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong"] },
  PH: { name: "Philippines", cities: ["Manila", "Cebu", "Davao", "Quezon City"] },
  MY: { name: "Malaysia", cities: ["Kuala Lumpur", "Penang", "Johor Bahru", "Kuching"] },
  SG: { name: "Singapore", cities: ["Singapore", "Jurong East", "Woodlands", "Tampines"] },
  NZ: { name: "New Zealand", cities: ["Auckland", "Wellington", "Christchurch", "Hamilton"] },
  KE: { name: "Kenya", cities: ["Nairobi", "Mombasa", "Kisumu", "Eldoret"] },
  GH: { name: "Ghana", cities: ["Accra", "Kumasi", "Tamale", "Takoradi"] },
  IQ: { name: "Iraq", cities: ["Baghdad", "Basra", "Erbil", "Mosul"] },
  IR: { name: "Iran", cities: ["Tehran", "Mashhad", "Isfahan", "Shiraz"] },
  UA: { name: "Ukraine", cities: ["Kyiv", "Kharkiv", "Odesa", "Dnipro"] },
  PL: { name: "Poland", cities: ["Warsaw", "Kraków", "Wrocław", "Gdańsk"] },
  NL: { name: "Netherlands", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"] },
  BE: { name: "Belgium", cities: ["Brussels", "Antwerp", "Ghent", "Bruges"] },
  CH: { name: "Switzerland", cities: ["Zurich", "Geneva", "Basel", "Bern"] },
  SE: { name: "Sweden", cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"] },
  NO: { name: "Norway", cities: ["Oslo", "Bergen", "Trondheim", "Stavanger"] },
  DK: { name: "Denmark", cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg"] },
  FI: { name: "Finland", cities: ["Helsinki", "Espoo", "Tampere", "Vantaa"] },
  AT: { name: "Austria", cities: ["Vienna", "Graz", "Linz", "Salzburg"] },
  PT: { name: "Portugal", cities: ["Lisbon", "Porto", "Coimbra", "Braga"] },
  GR: { name: "Greece", cities: ["Athens", "Thessaloniki", "Patras", "Heraklion"] },
  CL: { name: "Chile", cities: ["Santiago", "Valparaíso", "Concepción", "La Serena"] },
  CO: { name: "Colombia", cities: ["Bogotá", "Medellín", "Cali", "Barranquilla"] },
  PE: { name: "Peru", cities: ["Lima", "Arequipa", "Trujillo", "Cusco"] },
};


  const handleFetchWeather = async () => {
    if (!API_KEY || !selectedCity) return;

    setLoading(true);
    setWeatherData(null);
    try {
      const res = await fetch(
        `https://api.weatherbit.io/v2.0/current?city=${selectedCity}&country=${selectedCountry}&key=${API_KEY}&units=M`
      );
      const data = await res.json();
      if (res.ok && data.data?.length) {
        setWeatherData(data.data[0]);
      } else {
        alert("Weather data not found for this city.");
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCity) handleFetchWeather();
  }, [selectedCity]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Weather by Country & City</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedCity("");
                setWeatherData(null);
              }}
              className="w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
            >
              {Object.entries(countries).map(([code, country]) => (
                <option key={code} value={code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="">-- Select City --</option>
              {countries[selectedCountry]?.cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading && <p className="text-center text-gray-600">Loading weather data...</p>}

        {weatherData && (
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl transition duration-300 ease-in-out mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">
                {weatherData.city_name}, {weatherData.country_code}
              </h3>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                {weatherData.weather.description}
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`}
                alt="weather icon"
                className="w-16 h-16"
              />
              <div>
                <p className="text-4xl font-semibold">{weatherData.temp}°C</p>
                <p className="text-sm mt-1">Feels like: {weatherData.app_temp}°C</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>Humidity: {weatherData.rh}%</div>
              <div>Wind Speed: {weatherData.wind_spd.toFixed(1)} m/s</div>
              <div>Pressure: {weatherData.pres} mb</div>
              <div>Visibility: {weatherData.vis} km</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
