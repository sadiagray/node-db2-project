const cars = [
    {
        vin: '1N6SD11S8PC302998',
        make: 'subaru',
        model: 'outback',
        mileage: 21500,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: '5NPDH4AE7FH545975',
        make: 'ford',
        model: 'focus',
        mileage: 1500,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: '1FTZF1727WKB94557',
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