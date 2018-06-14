export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  //server.createList('car', 10);
  server.loadFixtures('manufacturers');
  server.loadFixtures('classes');
  server.loadFixtures('colors');
  server.loadFixtures('cars');
}
