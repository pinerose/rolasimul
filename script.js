let player = { 
    // 체력 공격력 방어력 연참 날카로움 집중
    // 강화 상급강화 역겨움 광폭화 갑옷
    HP: 100,
    AtP: 0,
    DP: 0,
    AdmgB: 0, //Added_Damage_during_Battle
    AdmgT: 0,
    AdmgO: 0,
    enforcing: 0,
    ad_enforcing: 0,
    disgust: 0,
    berserk: 0,
    armored: 0,
    location: 2 // 전열 1, 중열 2, 후열 3
};

let target = {
    // 체력 방어도 철갑 상처 무방비 광폭화 
    HP: 100,
    shield: 0,
    Armor: 0,
    wounded: 0,
    defenseless: 0,
    berserk: 0,
    location: 1 // 전열 0, 중열 1, 후열 2
}

let relic = {};

let selector = new Function('input', 'return document.querySelector(input)');
let selectorAll = new Function('input', 'return document.querySelectorAll(input)')

function status(kinds, effects){
    switch (kinds){
        case 'player':
            player[effects] = parseInt(selector(`.${kinds}.${effects} input`).value);
            console.log(parseInt(selector(`.${kinds}.${effects} input`).value));
            break;
        case 'target':
            target[effects] = selector(`.${kinds}.${effects} input`).value;
            break;
    }
}

function locate(kinds, address){
    switch (kinds){
        case 'player':
            player['location'] = parseInt(address);
            console.log(player['location']);
            break;
        case 'target':
            target['location'] = parseInt(address);
            break;
    }
}

function pages(idName){
    if (idName == 'simulator'){
        for (let x of selectorAll(`#${idName} div`)){
            x.style.display = 'flex';
        }
        selector('#input_information').style.display = 'none';
    }
    document.getElementById(idName).style.display = 'flex';
    for (let x of selectorAll(`#input_information div:not(#${idName})`)){
        x.style.display = 'none';
    }

}

function relic_kind(kind){
    selector(`#${kind}_relic`).style.display = 'flex';
    for (let x of selectorAll(`#relic_list div:not(#${kind}_relic)`)) {
        x.style.display = 'none';
    }
}

function choose_relic(input){
    switch (input){
        case 'paladin' || 'arcknight':
            relic['zeroth'] = 'warrior';
            relic['first'] = 'knight';
            relic['second'] = input;
            break;
        case 'berserker' || 'reaper':
            relic['zeroth'] = 'warrior';
            relic['first'] = 'lancer';
            relic['second'] = input;
            break;
        case 'arcmage' || 'druid':
            relic['zeroth'] = 'mage';
            relic['first'] = 'sorcerer';
            relic['second'] = input;
            break;
        case 'warlock' || 'summoner':
            relic['zeroth'] = 'mage';
            relic['first'] = 'magister';
            relic['second'] = input;
            break;
        case 'knight' || 'lancer':
            relic['zeroth'] = 'warrior';
            relic['first'] = input;
            break;
        case 'sorcerer' || 'magister':
            relic['zeroth'] = 'mage';
            relic['first'] = input;
            break;
        case 'warrior' || 'mage':
            relic['zeroth'] = input;
            break;
    }
}