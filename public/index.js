(function () {
  const searchInput = document.getElementsByName('search-input')[0];
  const dataList = document.getElementById('password-examples');
  const messageBoard = document.getElementById('messages');

  const renderDOM = function (error, result) {
    dataList.innerHTML = '';
    if (error) {
      messageBoard.appendChild(result);
    } else {
      const responseArray = result.split(',');
      responseArray.forEach((password) => {
        const passwordExample = document.createElement('option');
        const passwordText = document.createTextNode(password);
        passwordExample.appendChild(passwordText);
        dataList.appendChild(passwordExample);
      });
    }
  };

  searchInput.addEventListener('keyup', (e) => {
    let passwordString = '';
    passwordString = `/search/${encodeURIComponent(e.target.value)}`;
    serverRequest(passwordString, renderDOM);
  });
}());
