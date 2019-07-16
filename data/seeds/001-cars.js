
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'JTDKARFP3L3124183', make: 'Toyota', model: 'Prius Prime XLE', mileage: 0, transmission: 'N/A', titleStatus: 'clean'},
        {id: 2, VIN: '1GBHK34K5PE208922', make: 'Chevrolet', model: 'C/K 3500', mileage: 28450, transmission: 'automatic'},
        {id: 3, VIN: 'WDDKK7CF1BF099168', make: 'Mercedes Benz', model: 'E550', mileage: 35006, transmission: '', titleStatus: '7 speed shiftable automatic'},
      ]);
    });
};

