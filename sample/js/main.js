(function (win, doc, exports) {

    'use strict';

    function Animal(name) {
        this.name = name;
    }
    Animal.prototype = {
        bark: function () {
            alert(this.name);
        }
    };

    function Dog(name) {
        this._super(name);
    }
    extend(Dog, Animal);
    Dog.prototype.bark = function () {
        alert(this.name + ' is dog.');
    };

    function Bulldog(name) {
        this._super(name);
    }
    extend(Bulldog, Dog);
    Bulldog.prototype.bite = function () {
        alert(this.name + ' bite!');
    };

    /////////////////////////////////////////////////

    var btn = doc.getElementById('btn');
    btn.onclick = function () {
        var animal  = new Animal('nameA');
        var dog     = new Dog('nameB');
        var bulldog = new Bulldog('nameC');

        animal.bark();
        dog.bark();
        bulldog.bark();
        bulldog.bite();
    };
}(window, document, window));
