function getFullYear() {
  return new Date().getFullYear();
}


function getFooterCopy(isIndex) {
  return isIndex === true ?
    'Holberton School' : 'Holberton School main dashboard';
}
