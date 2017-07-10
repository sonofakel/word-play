$(function() {
  $("#sent-form").submit(function(event) {
    event.preventDefault();
    var sentArr = $("#sentence").val().split(' ');
    sentArrLongWords = sentArr.map(function(word) {
      if (word.length >= 3) {
        return word;
      }
    });
    var reversedStr = sentArrLongWords.reverse().join(' ');
    $(".output p").text(reversedStr);
  });
});
