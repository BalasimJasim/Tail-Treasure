import mongoose from "mongoose";
import faker from "faker";
import "dotenv/config";

import { User } from "../src/models/UserModel.js";
import { Product } from "../src/models/ProductModel.js";
import { Review } from "../src/models/ReviewModel.js";

// Function to generate fake dog food products
const generateDogFoodProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = new Product({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: faker.random.number({ min: 20, max: 100 }), // Assuming price range $20 to $100
      quantity: faker.random.number({ min: 1, max: 50 }), // Assuming quantity range 1 to 50 units
      category: "dogs",
      image: faker.image.animals({ category: "dogs", width: 300, height: 300 }), // Generate dog image
      createdAt: faker.date.recent(),
    });
    products.push(product);
  }
  return products;
};

// Function to seed fake dog food products
const seedDogFoodProducts = async () => {
  try {
    const fakeDogFoodProducts = generateDogFoodProducts(10); // Generate 10 fake dog food products
    await Product.insertMany(fakeDogFoodProducts);
    console.log("Fake dog food products seeded successfully");
  } catch (error) {
    console.error("Error seeding fake dog food products:", error);
  }
};

// Call the function to seed fake dog food products

// Function to generate fake cat food products
const generateCatFoodProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = new Product({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: faker.number({ min: 15, max: 80 }), // Assuming price range $15 to $80
      quantity: faker.number.int({ min: 1, max: 50 }), // Assuming quantity range 1 to 50 units
      category: "cats",
      image: faker.image.cat({ width: 300, height: 300 }), // Generate cat image
      createdAt: faker.date.recent(),
    });
    products.push(product);
  }
  return products;
};

// Function to seed fake cat food products
const seedCatFoodProducts = async () => {
  try {
    const fakeCatFoodProducts = generateCatFoodProducts(10); // Generate 10 fake cat food products
    await Product.insertMany(fakeCatFoodProducts);
    console.log("Fake cat food products seeded successfully");
  } catch (error) {
    console.error("Error seeding fake cat food products:", error);
  }
};

// Call the function to seed fake cat food products

// Function to generate fake bird food products
const generateBirdFoodProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = new Product({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: faker.number({ min: 10, max: 50 }), // Assuming price range $10 to $50
      quantity: faker.number({ min: 1, max: 50 }), // Assuming quantity range 1 to 50 units
      category: "birds",
      image: faker.image.animals({
        category: "birds",
        width: 300,
        height: 300,
      }), // Generate bird image
      createdAt: faker.date.recent(),
    });
    products.push(product);
  }
  return products;
};

// Function to seed fake bird food products
const seedBirdFoodProducts = async () => {
  try {
    const fakeBirdFoodProducts = generateBirdFoodProducts(10); // Generate 10 fake bird food products
    await Product.insertMany(fakeBirdFoodProducts);
    console.log("Fake bird food products seeded successfully");
  } catch (error) {
    console.error("Error seeding fake bird food products:", error);
  }
};

// Call the function to seed fake bird food products

// Function to generate fake rodent food products
const generateRodentFoodProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = new Product({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: faker.random.number({ min: 5, max: 30 }), // Assuming price range $5 to $30
      quantity: faker.random.number({ min: 1, max: 50 }), // Assuming quantity range 1 to 50 units
      category: "rodents",
      image: faker.image.animals({
        category: "rodents",
        width: 300,
        height: 300,
      }), // Generate rodent image
      createdAt: faker.date.recent(),
    });
    products.push(product);
  }
  return products;
};

// Function to seed fake rodent food products
const seedRodentFoodProducts = async () => {
  try {
    const fakeRodentFoodProducts = generateRodentFoodProducts(10); // Generate 10 fake rodent food products
    await Product.insertMany(fakeRodentFoodProducts);
    console.log("Fake rodent food products seeded successfully");
  } catch (error) {
    console.error("Error seeding fake rodent food products:", error);
  }
};

const generateFakeUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        postalCode: faker.address.zipCode(),
        country: faker.address.country(),
      },
      phoneNumber: faker.phone.phoneNumber(),
    };
    users.push(user);
  }
  return users;
};

const seedFakeUsers = async () => {
  try {
    // Generate 10 fake users
    const fakeUsers = generateFakeUsers(10);
    // Call the function to seed fake rodent food products
    await User.insertMany(fakeUsers);
    console.log("Fake users seeded successfully");
  } catch (error) {
    console.error("Error seeding fake users products:", error);
  }
};

async function seedData() {
  try {
    await seedCatFoodProducts();
    await seedDogFoodProducts();
    await seedBirdFoodProducts();
    await seedRodentFoodProducts();
    await seedFakeUsers();
    console.log("Seed data successfully inserted:");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    // Close the connection
    mongoose.disconnect();
  }
}

async function createAddress() {
  return {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postalCode: faker.address.zipCode(),
    country: faker.address.country(),
  };
}

(async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to MongoDB");
    await seedData();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();

// import mongoose from "mongoose";
// import { faker } from "@faker-js/faker";
// import "dotenv/config";

// import { User } from "../src/models/UserModel.js";
// import { Product } from "../src/models/ProductModel.js";
// import { Review } from "../src/models/ReviewModel.js";

// const generateDogFoodProducts = (count) => {
//   const products = [];
//   for (let i = 0; i < count; i++) {
//     const product = new Product({
//       name: faker.commerce.productName(),
//       description: faker.lorem.paragraph(),
//       price: faker.random.number({ min: 20, max: 100 }), // Assuming price range $20 to $100
//       quantity: faker.random.number({ min: 1, max: 50 }), // Assuming quantity range 1 to 50 units
//       category: "dogs",
//       image: faker.image.animals({ category: "dogs", width: 300, height: 300 }), // Generate dog image
//       createdAt: faker.date.recent(),
//     });
//     products.push(product);
//   }
//   return products;
// };

// // Function to seed fake dog food products
// const seedDogFoodProducts = async () => {
//   try {
//     const fakeDogFoodProducts = generateDogFoodProducts(10); // Generate 10 fake dog food products
//     await Product.insertMany(fakeDogFoodProducts);
//     console.log("Fake dog food products seeded successfully");
//   } catch (error) {
//     console.error("Error seeding fake dog food products:", error);
//   }
// };

// // Call the function to seed fake dog food products
// seedDogFoodProducts();

// const generateCatFoodProducts = (count) => {
//   const products = [];
//   for (let i = 0; i < count; i++) {
//     const product = new Product({
//       name: faker.commerce.productName(),
//       description: faker.lorem.paragraph(),
//       price: faker.random.number({ min: 15, max: 80 }), // Assuming price range $15 to $80
//       quantity: faker.random.number({ min: 1, max: 50 }), // Assuming quantity range 1 to 50 units
//       category: "cats",
//       image: faker.image.animals({ category: "cats", width: 300, height: 300 }), // Generate cat image
//       createdAt: faker.date.recent(),
//     });
//     products.push(product);
//   }
//   return products;
// };

// // Function to seed fake cat food products
// const seedCatFoodProducts = async () => {
//   try {
//     const fakeCatFoodProducts = generateCatFoodProducts(10); // Generate 10 fake cat food products
//     await Product.insertMany(fakeCatFoodProducts);
//     console.log("Fake cat food products seeded successfully");
//   } catch (error) {
//     console.error("Error seeding fake cat food products:", error);
//   }
// };

// // Call the function to seed fake cat food products
// seedCatFoodProducts();

// // Function to generate fake bird food products
// const generateBirdFoodProducts = (count) => {
//   const products = [];
//   for (let i = 0; i < count; i++) {
//     const product = new Product({
//       name: faker.commerce.productName(),
//       description: faker.lorem.paragraph(),
//       price: faker.random.number({ min: 10, max: 50 }), // Assuming price range $10 to $50
//       quantity: faker.random.number({ min: 1, max: 50 }), // Assuming quantity range 1 to 50 units
//       category: "birds",
//       image: faker.image.animals({
//         category: "birds",
//         width: 300,
//         height: 300,
//       }), // Generate bird image
//       createdAt: faker.date.recent(),
//     });
//     products.push(product);
//   }
//   return products;
// };

// // Function to seed fake bird food products
// const seedBirdFoodProducts = async () => {
//   try {
//     const fakeBirdFoodProducts = generateBirdFoodProducts(10); // Generate 10 fake bird food products
//     await Product.insertMany(fakeBirdFoodProducts);
//     console.log("Fake bird food products seeded successfully");
//   } catch (error) {
//     console.error("Error seeding fake bird food products:", error);
//   }
// };

// // Call the function to seed fake bird food products
// seedBirdFoodProducts();

// // Function to generate fake rodent food products
// const generateRodentFoodProducts = (count) => {
//   const products = [];
//   for (let i = 0; i < count; i++) {
//     const product = new Product({
//       name: faker.commerce.productName(),
//       description: faker.lorem.paragraph(),
//       price: faker.random.number({ min: 5, max: 30 }), // Assuming price range $5 to $30
//       quantity: faker.random.number({ min: 1, max: 50 }), // Assuming quantity range 1 to 50 units
//       category: "rodents",
//       image: faker.image.animals({
//         category: "rodents",
//         width: 300,
//         height: 300,
//       }), // Generate rodent image
//       createdAt: faker.date.recent(),
//     });
//     products.push(product);
//   }
//   return products;
// };

// // Function to seed fake rodent food products
// const seedRodentFoodProducts = async () => {
//   try {
//     const fakeRodentFoodProducts = generateRodentFoodProducts(10); // Generate 10 fake rodent food products
//     await Product.insertMany(fakeRodentFoodProducts);
//     console.log("Fake rodent food products seeded successfully");
//   } catch (error) {
//     console.error("Error seeding fake rodent food products:", error);
//   }
// };

// // Call the function to seed fake rodent food products
// seedRodentFoodProducts();
// async () => {
//   try {
//     await mongoose.connect(process.env.CONNECTION_STRING);
//     console.log("connected to DB");
//     await User.deleteMany({});
//     await Product.deleteMany({});
//     await Review.deleteMany({});
//     seedData();
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// async function seedData() {
//   try {
//     // Create users
//     const users = await User.create([
//       {
//         firstName: faker.person.firstName(),
//         lastName: faker.person.lastName(),
//         email: "user1@example.com",
//         password: "password123",
//         address: await createAddress(),
//         phoneNumber: faker.phone.phoneNumber(),
//       },

//       // Add more users as needed
//     ]);

//     //     // Create products
//     //     const products = await Product.create([
//     //       {
//     //         name: "Product 1",
//     //         description: faker.lorem.sentence(),
//     //         price: faker.random.number({ min: 10, max: 100 }),
//     //         quantity: faker.random.number({ min: 1, max: 10 }),
//     //         category: "Category 1",
//     //         image: faker.image.imageUrl(),
//     //       },
//     //       {
//     //         name: "Product 2",
//     //         description: faker.lorem.sentence(),
//     //         price: faker.random.number({ min: 10, max: 100 }),
//     //         quantity: faker.random.number({ min: 1, max: 10 }),
//     //         category: "Category 2",
//     //         image: faker.image.imageUrl(),
//     //       },
//     //       // Add more products as needed
//     //     ]);

//     console.log("Seed data successfully inserted:", { users, products });
//   } catch (err) {
//     console.error("Error seeding data:", err);
//   } finally {
//     // Close the connection
//     mongoose.disconnect();
//   }
// }

// // // Function to create a fake address
// // async function createAddress() {
// //   return await Address.create({
// //     street: faker.address.streetAddress(),
// //     city: faker.address.city(),
// //     state: faker.address.state(),
// //     postalCode: faker.address.zipCode(),
// //     country: faker.address.country(),
// //   });
// // }
