(function () {
  var searchInput = document.getElementsByName('search-input')[0];
  var dataList = document.getElementById('password-examples');
  var passwordString = '';
  var renderDOM = function (err, res) {
    if (err) {
      
    }
  }

  searchInput.addEventListener('keyup', function(e) {
    passwordString = '/search/' + encodeURIComponent(e.target.value);

  serverRequest(passwordString, renderDOM);
  //   if (e.key.length === 1 || e.key === "Backspace" || e.key === "Space") {
  //   switch(e.key) {
  //     case 'Backspace':
  //       if (passwordString.length > 0 ) {
  //         passwordString = passwordString.slice(0, -1);
  //       }
  //       break;
  //     case '"':
  //       passwordString += '\"';
  //       break;
  //     case "'":
  //       passwordString += "\'";
  //       break;
  //     case '\\':
  //       passwordString += '\\';
  //       break;
  //     case 'Space':
  //       passwordString += ' ';
  //       break;
  //     // case ( 'Shift' || 'Meta' || 'Alt' || 'ArrowLeft' || 'ArrowRight' || 'ArrowUp' || ''):
  //     //   break;
  //     default:
  //       passwordString += e.key;
  //   }
  // }
  //   console.log(passwordString);
  //
  });
})();
