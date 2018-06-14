import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  number() {
    const number = faker.random.number({ min: 100, max: 999 });
    return `A${number}AA777`;
  },
  year() {
    return faker.random.number({ min: 2010, max: 2018 });
  },
  afterCreate(car) {
    car.update({
      manufacturerId: faker.random.number({ min: 1, max: 3 }),
      colorId: faker.random.number({ min: 1, max: 3 }),
      classId: faker.random.number({ min: 1, max: 3 }),
    });
  }
});
