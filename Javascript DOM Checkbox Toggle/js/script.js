
function checkAll1() {

    var inputs = document.querySelectorAll('.check1');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = true;
    }
  
    this.onclick = uncheckAll1;
  }
  
  function uncheckAll1() {
    var inputs = document.querySelectorAll('.check1');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  
    this.onclick = checkAll1;
  }
  
  var el = document.getElementById("btnToggle");
  el.onclick = checkAll1;