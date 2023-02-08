import ValidatorService from '../services/ValidatorService';

export default class Form {
  constructor(elem) {
    this.form = elem;
    this.inputs = this.form.querySelectorAll('input');
    this.submitButton = this.form.querySelector('button[type="submit"]');
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    this.submitButton.addEventListener('click', (e) => this.submitForm(e));
  }

  submitForm(e) {
    e.preventDefault();
    if (ValidatorService.validateForm(this.inputs, this.submitButton)) {
      const formData = new FormData(this.form);

      alert(
        `You entered: ${formData.get(
          'email'
        )}. If this was a real site, your data would go to the server`
      );

      this.inputs.forEach((input) => {
        input.value = '';
      });
    }
  }
}
