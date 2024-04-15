import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import "dotenv/config";

import { User } from "../src/models/UserModel.js";
import { Product } from "../src/models/ProductModel.js";
import { Review } from "../src/models/ReviewModel.js";

async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("connected to DB");
    await User.deleteMany({});
    await Product.deleteMany({});
    await Review.deleteMany({});
    seedData();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

async function seedData() {
  try {
    // Create users
    const users = await User.create([
      {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: "user1@example.com",
        password: "password123",
        address: await createAddress(),
        phoneNumber: faker.phone.phoneNumber(),
      },

      // Add more users as needed
    ]);

    // Create products
    const products = await Product.create([
      {
        name: "Product 1",
        description: faker.lorem.sentence(),
        price: faker.random.number({ min: 10, max: 100 }),
        quantity: faker.random.number({ min: 1, max: 10 }),
        category: "Category 1",
        image: faker.image.imageUrl(),
      },
      {
        name: "Product 2",
        description: faker.lorem.sentence(),
        price: faker.random.number({ min: 10, max: 100 }),
        quantity: faker.random.number({ min: 1, max: 10 }),
        category: "Category 2",
        image: faker.image.imageUrl(),
      },
      // Add more products as needed
    ]);

    console.log("Seed data successfully inserted:", { users, products });
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    // Close the connection
    mongoose.disconnect();
  }
}

// Function to create a fake address
async function createAddress() {
  return await Address.create({
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postalCode: faker.address.zipCode(),
    country: faker.address.country(),
  });
}
