import JustValidate from "just-validate";
import Inputmask from "inputmask";
const validateForm = () => {
    const becomingDealerForm = document.querySelector('.becoming-dealer__form');
    const requestCallForm = document.querySelector('#request-call__valid');
    const contactsFeedbackValid = document.querySelector('#contacts__feedback-valid');
    if (becomingDealerForm) {
        const tel = becomingDealerForm.querySelector('.label-primary__input--tel');
        const inputMask = new Inputmask('+7 (999) 999-99-99');
        inputMask.mask(tel);
        const validator = new JustValidate(becomingDealerForm);
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
                    const phone = becomingDealerForm.querySelector('.label-primary__input--tel').inputmask.unmaskedvalue();
                    return phone.length === 10;
                },
            }])


        validator.onSuccess(e => {
            console.log('Проверка успешна');
            e.target.reset();
        });
    }
    if (requestCallForm) {
        const tel = requestCallForm.querySelector('.label-primary__input--tel');
        const inputMask = new Inputmask('+7 (999) 999-99-99');
        inputMask.mask(tel);
        const validator = new JustValidate(requestCallForm);
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
                    const phone = requestCallForm.querySelector('.label-primary__input--tel').inputmask.unmaskedvalue();
                    return phone.length === 10;
                },
            }])


        validator.onSuccess(e => {
            console.log('Проверка успешна');
            e.target.reset();
        });
    }
    if (contactsFeedbackValid) {
        const tel = contactsFeedbackValid.querySelector('.label-primary__input--tel');
        const inputMask = new Inputmask('+7 (999) 999-99-99');
        inputMask.mask(tel);
        const validator = new JustValidate(contactsFeedbackValid);
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
                    const phone = contactsFeedbackValid.querySelector('.label-primary__input--tel').inputmask.unmaskedvalue();
                    return phone.length === 10;
                },
            }])


        validator.onSuccess(e => {
            console.log('Проверка успешна');
            e.target.reset();
        });
    }
}

export default validateForm;
