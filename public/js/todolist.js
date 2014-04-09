var $listData = $('[context="list-data"]');
// Get Data
var array = JSON.parse(localStorage.getItem('listData')) || [];

if (array == '') {
  console.log('none');
  $listData.append('<li></li>')
};
for (var i = 0; i < array.length; i++) {
  $listData.append('<li>' + array[i] + '</li>')
};

// store data
$listData.on('blur paste input', function() {
  var array = [];
  $listData.find('li').each(function() {
    array.push($(this).text())
    localStorage.setItem('listData', JSON.stringify(array))
  })

});
