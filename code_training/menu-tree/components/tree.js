export default function (data) {
    const tree = document.querySelector("nav#tree")

    const menu = document.createElement("ul")

    const firstLevel = data.filter(item => !item.parent)

    const allElements = firstLevel.map(createElementMenu)

    allElements.forEach(li => menu.append(li))

    function createElementMenu(menuItem) {

        const li = document.createElement("li")

        li.innerHTML = menuItem.name

        const childrens = data.filter(item => {
            return item.parent === menuItem.id
        })


        if (childrens.length) {

            //adiciona um click para os parents
            li.addEventListener('click', event => {
                event.stopPropagation()
                event.target.classList.toggle('open')
            })


            li.classList.add("has-children")

            const subMenu = document.createElement("ul")

            childrens.map(createElementMenu).forEach(li => subMenu.append(li))

            li.append(subMenu)
        }

        return li

    }



    tree.append(menu)
}