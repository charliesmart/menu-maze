var components = {
    'empty': createEmpty,
    'coin': createCoin,
    'dropdown': menu,
}

function menu(menuInfo) {

    console.log('creating menu');
    var contents = menuInfo.contents;
    var type = menuInfo.type;
    var menu = document.createElement('ul')

    menu.className = menuInfo.type;

    if (!!contents) {
        for (var i = 0; i < contents.length; i++) {
            menu.appendChild(components[contents[i].type](contents[i]))
        }
    }

    return menu;
}

function createEmpty() {
    console.log('creating empty');
    var li = document.createElement('li');
    var emptyContent = document.createElement('div');
    emptyContent.className = 'menu-content';

    li.appendChild(emptyContent);

    return li;
}

function createCoin() {
    console.log('creating coin');
    var li = document.createElement('li');
    li.className = 'gold';

    var emptyContent = document.createElement('div');
    emptyContent.className = 'menu-content';

    li.appendChild(emptyContent);

    return li;
}
