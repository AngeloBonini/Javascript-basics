function watchTV() {
    console.log("Now I can watch a tv program");
    return "the end";
}
function travel() {
    console.log("letś go to China");
    return "the end";
}
function shopping() {
    console.log("I'm gonna shop now");
    return "the end";
}
function review() {
    console.log("the code review is my deepest fear");
    return "the end";
}
function reviewAllDay() {
    console.log("the code review is my deepest fear");
    return "the end";
}
/**
 * This is the common if/else statement tree, wich can be much expensive in terms of computability
 * @param {ranking is a string} ranking
 */
function action(ranking) {
    if (ranking == 'prime') {
        travel();
    }
    else if (ranking == 'second') {
        shopping();
    }
    else if (ranking == 'third') {
        watchTV();
    }
    else if (ranking == 'fourth') {
        review();
    }
}
/**
 * Now we will add an Switch case statement
 * now the nodes are independent for each other, as we can see,
 * but we can still make it better.
 */
function actionSwitch(ranking) {
    switch (ranking) {
        case 'prime':
            travel();
            break;
        case 'second':
            shopping();
            break;
        case 'third':
            watchTV();
            break;
        case 'fourth':
            review();
            break;
    }
}
actionSwitch('prime');
actionSwitch('prime');
actionSwitch('prime');
actionSwitch('prime');
/**
 * now this part is a more direct strategie
 * using a key-value pair, just like inside an object
 *
 */
var keys = {
    'prime': watchTV,
    'second': travel,
    'third': shopping,
    'fourth': review
};
function actionKey(ranking) {
    var strategy = keys[ranking];
    strategy();
}
actionKey('prime');
actionKey('third');
actionKey('second');
var strategies = new Map([
    ['major_A', travel],
    ['major_B', review],
    ['major_C', reviewAllDay],
    ['major_D', reviewAllDay],
    ['minor_A', travel],
    ['minor_B', shopping],
    ['minor_C', watchTV],
    ['minor_D', review]
]);
function actionMap(ranking, subjectType) {
    var condition = subjectType + "_" + ranking;
    var strategy = strategies.get(condition);
    strategy();
}
