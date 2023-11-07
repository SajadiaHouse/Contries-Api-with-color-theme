import React from 'react';
import data from './data.json';
import { Link, useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const state = location.state ? location.state.name : '';
  console.log(state);
  
  const fdata = data.find((country) => country.name.toLowerCase() === state.toLowerCase());

  // Check if the country is found, and handle the not found scenario
  if (!fdata) {
    return <div>Country not found</div>;
  }

  return (
    <>
      <div className="w-full mt-8 flex">
        <div className="shadow-xl relative ml-10">
          <Link
            to="/"
            className="text-black font-normal dark:bg-gray-700 dark:text-slate-300 rounded text-sm p-2.5 text-center inline-flex items-center"
            type="button"
          >
            <svg
              height="16"
              className="dark:fill-white mr-2"
              viewBox="0 0 16 40"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48h-48z" fill="none"></path>
              <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z"></path>
            </svg>
            Back
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 py-10 px-14">
          <img src={fdata.flags.png} alt="" className="object-contain w-full h-auto" />
        </div>
        <div className="flex-1 p-10">
          <div className="py-10">
            <p className="text-3xl font-bold dark:text-white">{fdata.name}</p>
            <div className="flex mt-4">
              <div className="flex-1">
                <p className="text-sm font-normal dark:text-gray-300 text-slate-700 my-3">
                  <strong>Native Name: </strong>
                  {fdata.name}
                </p>
                <p className="text-sm font-normal dark:text-gray-300 text-slate-700 my-3">
                  <strong>Population: </strong>
                  {fdata.population}
                </p>
                <p className="text-sm font-normal dark:text-gray-300 text-slate-700 my-3">
                  <strong>Region: </strong>
                  {fdata.region}
                </p>
                <p className="text-sm font-normal dark:text-gray-300 text-slate-700 my-3">
                  <strong>Sub Region: </strong>
                  {fdata.subregion}
                </p>
                <p className="text-sm font-normal dark:text-gray-300 text-slate-700 my-3">
                  <strong>capital: </strong>
                  {fdata.capital}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-sm font-normal dark:text-gray-300 text-slate-700 my-3">
                  <strong>Top level domain: </strong>
                  {fdata.topLevelDomain}
                </p>
                <p className="text-sm font-normal dark:text-gray-300 text-slate-700 my-3">
                  <strong>Currencies: </strong>
                  {fdata.currencies.map((currency) => currency.name).join(', ')}
                </p>
                <p className="text-sm font-normal dark:text-gray-300 text-slate-700 my-3">
                  <strong>Languages: </strong>
                  {fdata.languages.map((language) => language.name).join(', ')}
                </p>
              </div>
            </div>
            <div className="flex text-sm font-normal dark:text-gray-300 text-slate-700 mt-6">
              <strong>Border Countries:</strong>
              {fdata.borders? fdata.borders.map((e) => (
                <p className="ml-6" key={e}>
                  {e}
                </p>
              )):""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;