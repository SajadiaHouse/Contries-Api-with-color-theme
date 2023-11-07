import React from 'react';
import Country from './Country';
import data from './data.json';
import SearchBar from './SearchBar'

const Main = ({ search, region, setRegion, setSearch }) => {
  const filteredData = data.filter((country) => {
    const nameMatch = country.name.toLowerCase().includes(search.toLowerCase());
    const regionMatch = country.region.toLowerCase().includes(region.toLowerCase());

    if (search && region) {
      return nameMatch && regionMatch;
    } else if (search) {
      return nameMatch;
    } else if (region) {
      return regionMatch;
    } else {
      return true;
    }
  });

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} setRegion={setRegion} region={region} />
      <div className="grid md:grid-cols-4 gap-16 px-10 mt-8">
        {filteredData.map((element) => (
          <Country key={element.alpha3Code} data={element} />
        ))}
      </div>
    </>

  );
};

export default Main;