window.onload = function(){
    document.getElementById('js-navigation_menu__toggle').onclick = function() {
        let parentNavigation = this.closest('.navigation');

        parentNavigation.classList.toggle('navigation--hidden');
    }
}
