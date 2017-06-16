$(function () {
  var $content = $('#blog > .content');
  var $loader = $('#blog > .loader');

  var data = {
    rss_url: 'https://medium.com/feed/@lnalex'
  };
  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status == 'ok') {
      var output = '';
      $.each(response.items, function (k, item) {

        output += '<div class="column"><div class="card">';
        output += '<div class="card-divider">';
        output += $.format.date(item.pubDate, "dd<br>MMM") + "</div>";
        var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
        var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
        var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
        var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
        output += '<img class="img-responsive" src="' + src + '">';
        output += '<div class="card-section"><h4><a href="'+ item.link + '">' + item.title + '</a></h4>';
        var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
        var maxLength = 120 // maximum number of characters to extract
        //trim the string to the maximum length
        var trimmedString = yourString.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        output += '<p>' + trimmedString + '...</p>';
        output += '</div></div></div>';
        return k < 3;
      });
      $loader.hide();
      $content.html(output);
    }
  });
});
