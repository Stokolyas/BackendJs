const catFactory = require('../project2');
const Cat = require('../project2');
const catsGroupGenerate = require('../project3');
const backCatName = require('../project4');
const oldCats = require('../project4');
const youngCats = require('../project4');
const nameStats = require('../project5');


var assert = require('assert');
describe('Test', function() {
    describe('Класс кот', function() {
        it('Котофабрика ', function() {
          assert.equal(typeof(catFactory('m')), 'object');
        });
        
        it("Генератор массива котов", function() {
            assert.equal(catsGroupGenerate(999).length, 999);
        });
        it("Возврат имен", function() {
            assert.equal(typeof(backCatName()), 'object');
        });
        it("Старые коты", function() {
            var expected = 'object';
            assert.equal(typeof(oldCats(3)), expected);
        });
        it("Молодые кошки", function() {
            assert.equal(youngCats().length, 0);
        });
        it("Счетчик имен", function() {
            assert.equal(nameStats('Kail').length, 4);
        });
        it("loudness", function() {
            assert.equal(catFactory('m','Kail', 5).age, 5);
        });
      });  
    });
  
    // ... дальнейшие тесты it и подблоки describe ...
