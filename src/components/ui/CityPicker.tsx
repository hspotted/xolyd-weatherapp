"use client";

import { GlobeIcon } from "@heroicons/react/outline";
import { City, Country } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

type Option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
  };
  label: string;
} | null;

const countries = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

export const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<Option>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: Option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: CityOption) => {
    setSelectedCity(option);
    const url = `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`;
    router.push(url);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label className="font-bold font-mono" htmlFor="country">
            Country
          </label>
        </div>
        <Select
          id="country"
          options={countries}
          value={selectedCountry}
          onChange={handleSelectedCountry}
        />
      </div>
      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label className="font-bold font-mono" htmlFor="city">
              City
            </label>
          </div>
          <Select
            id="city"
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode: city.countryCode,
                name: city.name,
              },
              label: city.name,
            }))}
          />
        </div>
      )}
    </div>
  );
};
