function serverRequest(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(null, xhr.response);
      } else {
        console.log('thats an error...', xhr);
        cb(xhr.status, xhr.response);
      }
    }

    xhr.open('GET', url, true);
    xhr.send();
  };
}
