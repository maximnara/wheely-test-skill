import { Response } from 'ember-cli-mirage';
import _ from 'lodash';

export default function() {

  this.namespace = 'api';

  this.get('/cars', function (db, request){
    return new Response(200, {}, db.cars.all());
  });

  this.get('/cars/:id', function (db, request){
    return new Response(200, {}, db.cars.find(request.params.id));
  });

  this.delete('/cars/:id', function (db, request){
    // There is no API for removing records, so that causes record appearence again.
    return new Response(200, {}, db.cars.find(request.params.id));
  });

  this.post('/cars', function (db, request){
    const params = getPreparedCarParams(request);
    const car = db.cars.create(params);
    return new Response(200, {}, car);
  });

  this.patch('/cars/:id', function (db, request){
    const id = request.params.id;
    const params = getPreparedCarParams(request);
    let car = db.cars.find(id);
    car = _.merge(car, params);
    car.save();
    return new Response(200, {}, car);
  });

  this.get('/colors', function (db, request){
    return new Response(200, {}, db.colors.all());
  });

  this.get('/manufacturers', function (db, request){
    return new Response(200, {}, db.manufacturers.all());
  });

  this.get('/classes', function (db, request){
    return new Response(200, {}, db.classes.all());
  });
}

function getPreparedCarParams(request) {
  const rawCar = JSON.parse(request.requestBody);
  const rels = rawCar.data.relationships;
  let carParams = {
    classId: rels.class.data.id,
    manufacturerId: rels.manufacturer.data.id,
    colorId: rels.color.data.id,
  };
  return _.merge(carParams, rawCar.data.attributes);
}
