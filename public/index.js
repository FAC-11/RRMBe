(function () {
  var searchInput = document.getElementsByName('search-input')[0];
  var dataList = document.getElementById('password-examples');
  var messageBoard = document.getElementById('messages');
  var passwordString = '';

  var renderDOM = function (error, result) {
    console.log('renderDOM is running')
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
    passwordString = '/search/' + encodeURIComponent(e.target.value);
    serverRequest(passwordString, renderDOM);
  });
})();
