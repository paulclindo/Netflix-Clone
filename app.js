const tabItems = document.querySelectorAll('.tab-item')
const contentItems = document.querySelectorAll('.tab-content-item')
// console.log(tabItems, contentItems)

//Select tab content item
function selectItem(e) {
    removeBorder()
    removeShow()
    // Add border to current tab
    this.classList.add('tab-border')
    //Grab content item from DOM
    console.log(this.id)
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //Add show class
    tabContentItem.classList.add('show')
}

//Remove border
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

//Remove show
function removeShow() {
    contentItems.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click', selectItem))