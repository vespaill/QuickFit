let calcCalories = (weight, height, age, actLvl) =>
    Math.round((66+(13.7*weight)+(5*height)-(6.8*age))*actLvl);

let calcProteins = (weight) => Math.round(weight*2.205);
let calcFats = (weight) => Math.round(weight);
let calcCarbs = (caloricGoal, cal_of_proteins, cal_of_fats) =>
    Math.round((caloricGoal - cal_of_proteins - cal_of_fats)/4);

const debug = false;

jQuery(document).ready(() => {
    let $inputs = $('#personal-info input');

    $inputs.on('change', () => {
        let weight = parseInt($('[name="weight"]').val(), 10);      if(debug) console.log('weight =', weight);
        let height = parseInt($('[name="height"]').val(), 10);      if(debug) console.log('height =', height);
        let age    = parseInt($('[name="age"]').val(), 10);         if(debug) console.log('age =', age);
        let actLvl = parseFloat($('[name="activityLevel"]').val()); if(debug) console.log('actLvl =', actLvl);
        let caloricGoal = calcCalories(weight, height, age, actLvl);if(debug) console.log('caloricGoal =', caloricGoal);
        let proteins = calcProteins(weight);                        if(debug) console.log('proteins =', proteins);
        let fats = calcFats(weight);                                if(debug) console.log('fats =', fats);
        let carbs = calcCarbs(caloricGoal, proteins*4, fats*9);     if(debug) console.log('carbs =', carbs);
        $('#cals').text(caloricGoal);
        $('#prots').text(proteins);
        $('#carbs').text(carbs);
        $('#fats').text(fats);
    });

    $inputs.trigger('change');
});