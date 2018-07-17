import {catFactory} from "project2.js"
import {catsGroupGenerate} from "project3.js"
import {backCatName} from "project4.js"
import {oldCats} from "project4.js"
import {youngCats} from "project4.js"
import {nameStats} from "project5.js"
describe("Test", function() {

    describe("Класс кот", function() {
  
      function makeTest(cat) {
        var expected = 'object';
        it("Котофабрика ", function() {
          assert.equal(typeof(catFactory()), expected);
        });
        
        it("Генератор массива котов", function() {
            assert.equal(catsGroupGenerate(999).length, 999);
        });
        it("Возврат имен", function() {
            assert.equal(backCatName(['Hell 2 m'])[0], ['Hell ']);
        });
        it("Старые коты", function() {
            var expected = 'number';
            assert.equal(typeof(oldCats(11)), expected);
        });
        it("Молодые кошки", function() {
            assert.equal(youngCats().length, 0);
        });
        it("Счетчик имен", function() {
            assert.equal(nameStats('Kail').length, 4);
        });

      }
  
      
        makeTest();
      
  
    });
  
    // ... дальнейшие тесты it и подблоки describe ...
  });