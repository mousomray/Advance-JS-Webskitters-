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

 // Destructuring the user object
const { id, name, username, email, address, phone, website, company } = user;
const { street, suite, city, zipcode, geo } = address;
const { lat, lng } = geo;
const { name: companyName, catchPhrase, bs } = company;

console.log(`User ID: ${id}`);
console.log(`Name: ${name}`);
console.log(`Username: ${username}`);
console.log(`Email: ${email}`);
console.log(`Address: ${street}, ${suite}, ${city}, ${zipcode}`);
console.log(`Geo Location: Lat - ${lat}, Lng - ${lng}`);
console.log(`Phone: ${phone}`);
console.log(`Website: ${website}`);
console.log(`Company Name: ${companyName}`);
console.log(`Catch Phrase: ${catchPhrase}`);
console.log(`Business: ${bs}`);