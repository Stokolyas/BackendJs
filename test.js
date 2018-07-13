describe("Test", function() {

    describe("Класс кот", function() {
  
      function makeTest(cat) {
        var expected = 'm';
        it("Котофабрика ", function() {
          assert.equal(catFactory(), expected);
        });
        
        it("Генератор массива котов", function() {
            assert.equal(catsGroupGenerate(999).length, 999);
        });
        it("Возврат имен", function() {
            assert.equal(back_Cat_Name(['Hell 2 m'])[0], ['Hell ']);
        });
        it("Старые коты", function() {
            assert.equal(oldCats(11), true);
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