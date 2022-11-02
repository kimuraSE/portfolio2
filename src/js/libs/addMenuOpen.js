class AddMenuOpen{

    constructor(){

        this.btn=document.querySelector('.header-btn-box');
        this.globalContainer=document.querySelector('#global-container');
        this._addEvent();

    }

    _toggle(){
        this.globalContainer.classList.toggle('menu-open');
    }
    _addEvent(){
        this.headerBtnBox.addEventListener('click',this._toggle.bind(this));
    }
}

new AddMenuOpen();