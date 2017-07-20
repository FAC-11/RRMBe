(function () {
  var searchInput = document.getElementsByName('search-input')[0];
  var dataList = document.getElementById('password-examples');
  var messageBoard = document.getElementById('messages');
  var form = document.getElementById('passwordForm');

  var renderDOM = function (error, result) {
    if (error) {
      messageBoard.appendChild(result);
    } else {
      var responseArray = result.split(',');
      responseArray.forEach(function (password) {
        var passwordExample = document.createElement('option');
        var passwordText = document.createTextNode(password);
        passwordExample.appendChild(passwordText);
        dataList.appendChild(passwordExample);
      });
    }
  };

  searchInput.addEventListener('keyup', function (e) {
    var passwordString = '';
    passwordString = '/search/' + encodeURIComponent(e.target.value);
    serverRequest(passwordString, renderDOM);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(document.getElementById('password-examples'));
    var heading = document.createElement('h2');
    var headingText = document.createTextNode('WARNING!');
    var passwordTry = e.target["0"].form["0"].value;
    // if(passwordTry === document.getElementById('password-examples')){
    //   console.log(yay!);
    // }
    var text = document.createTextNode('We are sorry but ' + passwordTry + ' is one of the top 1000 used passwords. Try something else!')
    while(messageBoard.hasChildNodes()){
      messageBoard.removeChild(messageBoard.lastChild);
    }
    heading.appendChild(headingText);
    messageBoard.appendChild(heading);
    messageBoard.appendChild(text);
  })

})();
