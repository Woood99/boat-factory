import JustValidate from "just-validate";
import Inputmask from "inputmask";
const validateForm = () => {
    const form = document.querySelector('.becoming-dealer__form');
    const tel = form.querySelector('.label-primary__input--tel');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(tel);

    const validator = new JustValidate(form);
    validator
        .addField('.label-primary__input--name', [{
                rule: 'required',
            },
            {
                rule: 'minLength',
                value: 3,
            }
        ])
        .addField('.label-primary__input--tel', [{
            validator: function () {
                const phone = form.querySelector('.label-primary__input--tel').inputmask.unmaskedvalue();
                return phone.length === 10;
            },
        }])


    validator.onSuccess(e => {
        console.log('Проверка успешна');
        e.target.reset();
    });
}

export default validateForm;
