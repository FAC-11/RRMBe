(function () {
  var searchInput = document.getElementsByName('search-input')[0];
  var dataList = document.getElementById('password-examples');
  var messageBoard = document.getElementById('messages');
  var form = document.getElementById('passwordForm');

  var renderDOM = function (error, result) {
    dataList.innerHTML = '';
    if (error) {
      messageBoard.appendChild(result);
    } else {
      var responseArray = result.split(',');
      responseArray.forEach(function(password) {
        var passwordExample = document.createElement('option');
        var passwordText = document.createTextNode(password);
        passwordExample.appendChild(passwordText);
        dataList.appendChild(passwordExample);
      });
      if (dataList.childNodes[0].value) {
        searchInput.setAttribute('class', 'input--red');
      } else {
        searchInput.setAttribute('class', 'input--green');
      }
    }
  };

  searchInput.addEventListener('keyup', function(e) {
    var passwordString = '';
    passwordString = '/search/' + encodeURIComponent(e.target.value);
    serverRequest(passwordString, renderDOM);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var options = dataList.childNodes;
    var heading = document.createElement('h2');
    var passwordTry = e.target["0"].form["0"].value;

    if(!(options[0].value)){
      var headingText = document.createTextNode('Good News!');
      var textP = document.createElement('p');
      var text = document.createTextNode('Your password ' + passwordTry + ' is not one of the top 100,000 used passwords. Remember to make sure your password is difficult to guess!');
      heading.setAttribute('class', 'h2--green');
      while(messageBoard.hasChildNodes()){
        messageBoard.removeChild(messageBoard.lastChild);
      }
      heading.appendChild(headingText);
      messageBoard.appendChild(heading);
      textP.appendChild(text);
      messageBoard.appendChild(textP);


    } else{
      var headingText = document.createTextNode('WARNING!');
      var textP = document.createElement('p');
      var text = document.createTextNode('We are sorry but ' + passwordTry + ' is one of the top 100,000 used passwords. Try something else!')
      heading.setAttribute('class', 'h2--red');
      while(messageBoard.hasChildNodes()){
        messageBoard.removeChild(messageBoard.lastChild);
      }
      heading.appendChild(headingText);
      textP.appendChild(text);
      messageBoard.appendChild(heading);
      messageBoard.appendChild(textP);
    }
  });
})();
