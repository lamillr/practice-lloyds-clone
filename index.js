var news = document.getElementById('tabs');
news.onmouseover = function() {
  document.getElementById('risk').style.display = 'block';
}
news.onmouseout = function() {
  document.getElementById('risk').style.display = 'none';
};