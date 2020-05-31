

const getDataMenu = () => {
    return [
        { id: 1, name: "Desktops", parent: 3 },
        { id: 3, name: "Computers", parent: 8 },
        { id: 4, name: "Smartphones", parent: 6 },
        { id: 6, name: "Portables", parent: 3 },
        { id: 7, name: "Tablets", parent: 6 },
        { id: 8, name: "Electronics", parent: null },
        { id: 18, name: "Camping", parent: null },
        { id: 10, name: "TV", parent: 8 },
        { id: 20, name: '11 pol', parent: 7 },
        { id: 13, name: "Remotes", parent: 14 },
        { id: 14, name: "Accessories", parent: 10 }
    ]
}
const LISTA = getDataMenu()

class CreateMenuTree {

    constructor(dados) {
        this.dados = dados
    }

    menuRef = () => document.querySelector("nav#tree")

    createUL = () => document.createElement('ul')

    createLI = () => document.createElement('li')

    pushUL = (ul, listaLI) => {
        for (let li of listaLI) {
            ul.append(li)
        }
        return ul
    }

    filterFather = () => {
        return this.dados.filter(item => !item.parent)
    }

    filterChildren = (idFather) => {
        return this.dados.filter(item => idFather === item.parent)
    }

    buildMenu = (refMenu, ulMenu) => refMenu.append(ulMenu)

    generateListLi = (item) => {
        let li = this.createLI()
        li.innerHTML = item.name

        const childrens = this.filterChildren(item.id)

        if (childrens.length) {
            li.addEventListener('click', function (event) {
                event.stopPropagation()
                event.target.classList.toggle('open')
            })
            const ul = this.createUL()
            const listLI = childrens.map(this.generateListLi)
            const subMenuUl = this.pushUL(ul, listLI)
            li.classList.add('has-children')
            li.append(subMenuUl)
        }
        return li
    }
}


const MENU = new CreateMenuTree(LISTA)

const menuREF = MENU.menuRef() // Menu referencia

const fatherMenu = MENU.filterFather(LISTA) // Menu principal

const listLI = fatherMenu.map(MENU.generateListLi)

const ul = MENU.createUL()

const menuUL = MENU.pushUL(ul, listLI)

MENU.buildMenu(menuREF, menuUL)

