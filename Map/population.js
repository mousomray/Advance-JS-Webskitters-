// Create a map to store country populations
let countryPopulations = new Map();

// Adding countries and their populations to the map
countryPopulations.set('USA', 331000000);
countryPopulations.set('China', 1441000000);
countryPopulations.set('India', 1380000000);
countryPopulations.set('Brazil', 213000000);

// Get population of a specific country
console.log(countryPopulations.get('India')); // Output: 1380000000

// Finding the country with the highest population
let highestPopulation = 0;
let countryWithHighestPopulation = '';

countryPopulations.forEach((population, country) => {
  if (population > highestPopulation) {
    highestPopulation = population;
    countryWithHighestPopulation = country;
  }
});

console.log(countryWithHighestPopulation); // Output: China

// Listing all countries and their populations
countryPopulations.forEach((population, country) => {
  console.log(`${country} - Population: ${population}`);
});
