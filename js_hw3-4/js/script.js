var test = {
  page: document.querySelector('body'),

  testName: function() {
    var headElement = document.createElement('span');
        headElement.className = headElement.className + 'testName';
        headElement.innerHTML = ('Тест по програмуванню');
        test.page.appendChild(headElement);
      },

  listQuestion: function() {
    var i = 1;
    while (i <= 3) {
      var question = document.createElement('div');
        question.className = question.className + 'questionName';
        question.innerHTML = (i+'.') + ' Питання №' + i;
        this.page.appendChild(question);
          var j = 1;
          while (j <= 3) {
            var optionBox = document.createElement('div');
              test.page.appendChild(optionBox);
              list = document.createElement('ul');
              optionBox.appendChild(list);
              listItem = document.createElement('li');
              list.appendChild(listItem);
              chekeckBox = document.createElement('input');
              chekeckBox.type = 'checkbox';
              chekeckBox.id = 'text';
              listItem.appendChild(chekeckBox);
              label = document.createElement('label');
              label.HTMLfor = 'id';
              label.innerHTML = ' Варіант відповіді №' + j;
              listItem.appendChild(label);
              j++;
          };
        i++
    };
  },

  submitTest: function () {
    var submit = document.createElement('button');
    submit.classList.add('click');
    submit.type = 'button'
    submit.innerHTML = 'Перевірити мої результати'
    this.page.appendChild(submit);
  },
}; // close object
test.testName();
test.listQuestion();
test.submitTest();
