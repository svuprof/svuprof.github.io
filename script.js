function showit(var1) {
  // Hide the one div that is shown
  document.getElementById('divvy1').style.display = 'none';
  document.getElementById('divvy2').style.display = 'none';
  document.getElementById('divvy3').style.display = 'none';
  // show the one div that you sent to this function
  document.getElementById(var1).style.display = 'block';
}
