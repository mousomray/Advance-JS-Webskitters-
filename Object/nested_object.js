let user ={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  // Print each property individually
console.log(`id: ${user.id}`);
console.log(`name: ${user.name}`);
console.log(`username: ${user.username}`);
console.log(`email: ${user.email}`);
console.log(`address:`);
console.log(`  street: ${user.address.street}`);
console.log(`  suite: ${user.address.suite}`);
console.log(`  city: ${user.address.city}`);
console.log(`  zipcode: ${user.address.zipcode}`);
console.log(`  geo:`);
console.log(`    lat: ${user.address.geo.lat}`);
console.log(`    lng: ${user.address.geo.lng}`);
console.log(`phone: ${user.phone}`);
console.log(`website: ${user.website}`);
console.log(`company:`);
console.log(`  name: ${user.company.name}`);
console.log(`  catchPhrase: ${user.company.catchPhrase}`);
console.log(`  bs: ${user.company.bs}`);