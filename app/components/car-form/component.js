import { isNone, typeOf } from '@ember/utils';
import Ember from 'ember';
import _ from 'lodash';
const E_CLASS_ID = 1;

export default Ember.Component.extend({
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
      param: 'classid',
      message: 'Год выпуска не может быть ниже 2012',
      validate: (year, classid) => {
        return isNone(year) || isNone(classid) || parseInt(classid, 10) != E_CLASS_ID || parseInt(year, 10) >= 2012;
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
  actions: {
    onSubmit() {
      this.sendAction('onSubmit');
    },
  },
});
