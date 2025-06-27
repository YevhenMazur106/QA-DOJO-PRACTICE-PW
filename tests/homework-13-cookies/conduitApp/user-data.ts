import { faker } from "@faker-js/faker";

export const createRegistrationData = {
  user: faker.name.firstName(),
  email: faker.internet.email(),
  password: "Password",
};
