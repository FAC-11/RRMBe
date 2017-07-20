function serverRequest(url, cb) {
  console.log('url put into serverRequest', url);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(null, xhr.response);
      } else {
        console.log('thats an error...', xhr);
        cb(xhr.status, xhr.response);
      }
    }
  };
  console.log('xhr', xhr);
  xhr.open('GET', url, true);
  xhr.send();
}
