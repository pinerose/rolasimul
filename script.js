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
    adEnforcing: 0,
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

const SELECTOR = input => document.querySelector(input)
const SELECTOR_All = input => document.querySelectorAll(input)

const STATUS = (kinds, effects) => {
    switch (kinds){
        case 'player':
            // if ((SELECTOR(`.${kinds}.${effects} input`).value == ''))
            player[effects] = parseInt(SELECTOR(`.${kinds}.${effects} input`).value);
            console.log(parseInt(SELECTOR(`.${kinds}.${effects} input`).value));
            break;
        case 'target':
            target[effects] = SELECTOR(`.${kinds}.${effects} input`).value;
            break;
    }
}

const LOCATE = (kinds, address) => {
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

const LOAD_SIMULATOR = () => {

    // 시뮬레이터 보여주기
    for (let x of SELECTOR_All(`#simulator div`)){
        x.style.display = 'flex';
    }
    SELECTOR('#input_information').style.display = 'none';
    SELECTOR('#simulator').style.display = 'flex';
    
    // 유물 집어넣기
    let relicList = SELECTOR(`#relic_display`);
    if (relic.class != undefined){
        relicList.insertAdjacentHTML('afterbegin', `<img src="img/relic/class/${relic.class}.png">`)
    }
}

const PAGES = idName => {
    if (idName == 'simulator'){
        LOAD_SIMULATOR();
    }
    SELECTOR(`#${idName}`).style.display = 'flex';
    for (let x of SELECTOR_All(`#input_information div:not(#${idName})`)){
        x.style.display = 'none';
    }

}

const RELIC_KIND = kind => {
    SELECTOR(`#${kind}_relic`).style.display = 'flex';
    for (let x of SELECTOR_All(`#relic_list div:not(#${kind}_relic)`)) {
        x.style.display = 'none';
    }
}

const CHOOSE_CLASS = input => relic['class'] = input;