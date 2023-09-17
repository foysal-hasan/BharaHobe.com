
toggleBar = document.querySelector('#toggle-bar')
toggleBar1 = document.querySelector('#toggle-bar1')
sidebarMenu = document.querySelector('#menu')
sidebarQuickLinks = document.querySelector('#quick-links')
layer = document.querySelector('#layer')
search_type_input = document.querySelector('#search_type')
searchType = document.querySelectorAll('.search-type')
closeIcon = document.querySelector('#close')



toggleBar.addEventListener('click', () => {
    sidebarMenu.classList.add('w-8/12')
    layer.classList.add('w-full')
})

toggleBar1.addEventListener('click', () => {
    sidebarQuickLinks.classList.add('w-4/12')
    layer.classList.add('w-full')
})

const closeFun = () => {
    if (sidebarMenu.classList.contains('w-8/12')) {
        sidebarMenu.classList.remove('w-8/12')
    } else {
        sidebarQuickLinks.classList.remove('w-4/12')
    }
    layer.classList.remove('w-full')
}

closeIcon.addEventListener('click', closeFun)

layer.addEventListener('click', closeFun)

searchType.forEach((element, index) => {
    element.addEventListener('click', () => {
        searchType.forEach(element => {
            element.classList.remove('border-b-4', 'active', 'text-slate-950')
        });
        element.classList.add('border-b-4', 'active', 'text-slate-950')
        if (index == 1) {
            search_type_input.value = 'for_sale'
        } else if (index == 2) {
            search_type_input.value = 'for_rent'
        } else {
            search_type_input.value = 'all'
        }
        console.log(search_type_input);
    })
});