import { getElement } from ".";

const conditions = target => {
    let conditionsArr = [ 
        uppercaseCondition(target),
        lowercaseCondition(target),
        numberCondition(target),
        specialCondition(target),
        lengthCondition(target)
    ];

    return{ conditionsArr } 
}

const uppercaseCondition = target => {
    let object = getElement('.form__password--indications-uppercase');

    return {
        object,
        isTrue: target.value.match(/[A-Z]/) ? true : false
    }
}

const lowercaseCondition = target => {
    let object = getElement('.form__password--indications-lowercase');
    return {
        object,
        isTrue: target.value.match(/[a-z]/) ? true : false
    }
}

const numberCondition = target => {
    let object = getElement('.form__password--indications-number');

    return {
        object,
        isTrue: target.value.match(/[0-9]/) ? true : false
    }
}

const specialCondition = target => {
    let object = getElement('.form__password--indications-special');

    return {
        object,
        isTrue: target.value.match(/[@$!%*#?&\.]/) ? true : false
    }
}

const lengthCondition = target => {
    let object = getElement('.form__password--indications-characters');

    return {
        object,
        isTrue: target.value.length > 9 ? true : false
    }
}

export {conditions};



