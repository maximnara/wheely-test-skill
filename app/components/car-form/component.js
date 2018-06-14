import { isNone, typeOf } from '@ember/utils';
import Ember from 'ember';
import _ from 'lodash';
const E_CLASS_ID = 1;
const S_CLASS_ID = 2;

export default Ember.Component.extend({
  /*
   * This map i would like change to config on db,
   * but have no idea how much such preferences total will be.
   */
  classYearMap: {
    [E_CLASS_ID]: 2012,
    [S_CLASS_ID]: 2015,
  },
  numberValidation: [
    {
      message: 'Гос. номер введен неправильно',
      validate: (val) => {
        let regexp = /^[а-яa-z]{1,1}\d{3,3}[а-яa-z]{2,2}\d{2,3}$/i;
        return regexp.test(val);
      }
    }
  ],
  yearValidation: [
    {
      param: 'classminyear',
      message: `Год выпуска не может быть ниже %@`,
      validate: function (year, classminyear) {
        const classMinYear = parseInt(classminyear, 10);
        const parsedYear = parseInt(year, 10);
        return isNone(year) || isNone(classminyear) || parsedYear >= classMinYear;
      }
    },
    {
      message: 'Год выпуска должен быть числом',
      validate: (year) => {
        const parsed = parseInt(year, 10);
        return !isNaN(parsed) && parsed == year;
      }
    }
  ],
  classMinYear: Ember.computed('car.class.id', function () {
    return this.get('classYearMap')[this.get('car.class.id')];
  }),
  actions: {
    onSubmit() {
      this.sendAction('onSubmit');
    },
  },
});
