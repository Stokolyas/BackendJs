describe("Test", function() {

    describe("Класс кот", function() {
  
      function makeTest(cat) {
        var expected = 'm';
        it("Котофабрика ", function() {
          assert.equal(catFactory(), expected);
        });
        
        it("Генератор массива котов", function() {
            assert.equal(catsGroupGenerate().length, 0);
        });
      }
  
      for (var x = 1; x <= 5; x++) {
        makeTest(x);
      }
  
    });
  
    // ... дальнейшие тесты it и подблоки describe ...
  });