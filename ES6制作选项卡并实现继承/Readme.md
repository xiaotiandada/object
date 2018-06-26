# ES6制作选项卡并实现继承

``` js

class Tab {
    constructor (id) {
        this.oBox = document.getElementById(id)
        this.aBtn = this.oBox.getElementsByTagName('input')
        this.aDiv = this.oBox.getElementsByTagName('div')

        this.iNow = 0
        this.init()
    }

    init() {
        for (let i = 0; i < this.aBtn.length; i++) {
            this.aBtn[i].onclick = function(){
                this.hide()
                this.show(i)
            }.bind(this)
        }
    }

    hide(){
        for (let i = 0; i < this.aBtn.length; i++) {
            this.aBtn[i].className = ''
            this.aDiv[i].style.display = 'none'
        }
    }

    show(index) {
        this.aBtn[index].className = 'btn'
        this.aDiv[index].style.display = 'block'
    }
}

class AutoTab extends Tab {
    constructor(id) {
        super(id)

        setInterval(this.next.bind(this), 1000)
    }

    next(){
        this.iNow++
        if(this.iNow == this.aBtn.length) {
            this.iNow = 0
        }
        this.hide()
        this.show(this.iNow)
    }
}


window.onload = function(){
    var tab = new Tab('box')
    var Atotb = new AutoTab('box2')
}

```