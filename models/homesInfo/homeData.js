const Home = require('../models/Homes')


const bainbridge = new Home ({
    name: 'Morningside Nursing & Rehabilitation',
    address: '1000 Pelham Parkway S, Bronx, NY 10461',
    phoneNumber: '718-409-2800',
    website: 'morningsidenrc.com'
})

bainbridge.save((error) => {
    if (error) {
        console.log('an error has occured!')
    }else {
        console.log('your data has been saved!!!')
    }
})
// const morningside = new Home ({
//     name: 'Morningside Nursing & Rehabilitation',
//     address: '100 Pelham Parkway S, Bronx, NY 10461',
//     phoneNumber: '718-409-2800',
//     website: 'morningsidenrc.com'
// })

// const beth = new Home ({
//     name: 'Beth Abraham Health Services & Housing',
//     address: '612 Allerton Ave, Bronx, NY 10467',
//     phoneNumber: '718-405-1414',
//     website: 'bethabrahamhealthservices.org'
// })

// const bxcenter = new Home ({
//     name: 'Bronx Center for Rehabilitation & Nursing',
//     address: '1010 Underhill Ave., Bronx, NY, 10472',
//     phoneNumber: '718-863-6700',
//     website: 'bronx-center.fscilities.centershealthcare.org'
// })

// const kings = new Home ({
//     name: 'Kings Harbor Multicare Center',
//     address: '2000 E Gunhill Rd., Bronx, NY, 10469',
//     phoneNumber: '718-320-0400',
//     website: 'kingsharbor.com'
// })

// const eastchester = new Home ({
//     name: 'Eastchester Rehab & Health Care Center',
//     address: '2700 Eastchester Rd, Bronx, NY, 10469',
//     phoneNumber: '718-231-5550',
//     website: 'eastchesterrehab.com'
// })

// const university = new Home ({
//     name: 'University Nursing Home',
//     address: '2505 Grand Ave, Bronx, NY, 10468',
//     phoneNumber: '718-295-1400',
//     website: 'university-center.facilities.centershealthcare.org'
// })

// const patrick = new Home ({
//     name: `St. Patrick's Home Rehabilitation & Health Care`,
//     address: '66 Van Cortlandt Park S #3102, Bronx, NY 10463',
//     phoneNumber: '718-519-2800',
//     website: 'stpatrickshome.org'
// })

// const williamsbridge = new Home ({
//     name: 'Williamsbridge Center for Rehabilitation & Nursing',
//     address: '1540 Tomlinson Ave, Bronx, NY, 10461',
//     phoneNumber: '718-892-6600',
//     website: 'williamsbridge-center.facilities.centershealthcare.org'
// })

// const grand = new Home ({
//     name: 'Grand Manor Nursing & Rehabilitation',
//     address: '700 White Plains Rd., Bronx, NY, 10473',
//     phoneNumber: '718-518-8892',
//     website: 'grandmanor.org'
// })

// const split = new Home ({
//     name: 'Split Rock Rehabilitation & Health Care Center',
//     address: '3525 Baychester Ave., Bronx, NY 10466',
//     phoneNumber: '718-798-8900',
//     website: 'splitrockrehab.com'
// })

// const hudson = new Home ({
//     name: 'Hudson Pointe at Riverdale Center For Nursing & Rehabilitation',
//     address: '3220 Henry Hudson Parkway, Bronx, NY, 10463',
//     phoneNumber: '718-514-2000',
//     website: 'citadelcarecenters.com/hudsonpointe/'
// })

// // This does the same thing as above
// // This promise saves each home into the db
// async function saveHome() {
//     const bainbridge = new Home({
//         name: 'Morningside Nursing & Rehabilitation',
//         address: '1000 Pelham Parkway S, Bronx, NY 10461',
//         phoneNumber: '718-409-2800',
//         website: 'morningsidenrc.com'
//     })

//     const doc = await bainbridge.save()
//     console.log(doc)
// }

// saveHome()
//     .catch(error => {console.error(error)})