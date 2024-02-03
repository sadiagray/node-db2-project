const cars = [
    {
        vin: '11111111111111111',
        make: 'subaru',
        model: 'outback',
        mileage: 21500,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: '11111111111111113',
        make: 'ford',
        model: 'focus',
        mileage: 1500,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: '11111111111111112',
        make: 'chevy',
        model: 'equinox',
        mileage: 131542,
        title: 'salvage',
    },
]

exports.seed = function (knex) {
    return knex('cars')
        .truncate().then(() => {
            return knex('cars').insert(cars)
        })
}