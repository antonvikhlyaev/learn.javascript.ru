describe('sum', function () {
  describe('сумма рандомных чисел', function () {
    function makeTest(a, b) {
      let expected = a + b;
      it('сумма чисел ' + a + ' и ' + b + ' равна ' + expected, function () {
        assert.equal(sum(a, b), expected);
      });
    }

    for (let i = 1; i <= 10; i++) {
      let a = Math.round(Math.random() * 10);
      let b = Math.round(Math.random() * 10);
      makeTest(a, b);
    }
  });

  describe('сумма введенных чисел', function () {
    let a = +prompt('Введите первое число:', '');
    let b = +prompt('Введите второе число:', '');
    let expected = a + b;
    it('сумма чисел ' + a + ' и ' + b + ' равна ' + expected, function () {
      assert.equal(sum(a, b), expected);
    });
  });
});