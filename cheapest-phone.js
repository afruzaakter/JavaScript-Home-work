// Process-1:
// const phones = [{name: 'samsung s5', Price: 45000, camera: 10, storage: 32},
// {name: 'walton m32', Price: 15000, camera: 10, storage: 4},
// {name: 'shaomi m3', Price: 12000, camera: 10, storage: 32},
// {name: 'nokia n95', Price: 8000, camera: 10, storage: 8},
// {name: 'htc h81', Price: 25000, camera: 10, storage: 16},
// {name: 'oppo a2', Price: 17000, camera: 10, storage: 32}
// ];
// let cheapest = phones[0];
// for(const phone of phones){
//     if(phone.Price < cheapest.Price){
//         cheapest=phone;
//     }
// }
// console.log(cheapest);

// Process-2: Problem 
const phones = [{name: 'samsung s5', Price: 45000, camera: 10, storage: 32},
{name: 'walton m32', price: 15000, camera: 10, storage: 4},
{name: 'shaomi m3', price: 12000, camera: 10, storage: 32},
{name: 'nokia n95',price: 8000, camera: 10, storage: 8},
{name: 'htc h81', price: 25000, camera: 10, storage: 16},
{name: 'oppo a2', price: 17000, camera: 10, storage: 32}
];
// let cheapest = phones[0];
// for(const phone of phones){
//     if(phone.Price < cheapest.Price){
//         cheapest=phone;
//     }
// }

function cheapestPhone(phones){
    let cheapest = phones[0];
   for(const phone of phones){
       if(phone.price < cheapest.price){
           cheapest = phone;
       }
   }
   return cheapest;
}
const cheapest = cheapestPhone[phones];
console.log(cheapest);