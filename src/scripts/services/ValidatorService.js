import validator from 'validator';

export default class ValidatorService {
  static validateForm(inputs) {
    let isFormValid = true;

    inputs.forEach((input) => {
      if (input.type === 'email') {
        if (!validator.isEmail(input.value)) {
          isFormValid = false;
          ValidatorService.setError(input);
          return;
        }
        ValidatorService.removeError(input);
      }
    });
    return isFormValid;
  }

  static setError(input) {
    input.classList.add('input-field__input--error');
  }

  static removeError(input) {
    input.classList.remove('input-field__input--error');
  }
}
