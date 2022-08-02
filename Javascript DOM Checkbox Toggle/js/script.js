const colors = document.getElementsByName('colors');
const btnToggle = document.querySelector('#btnToggle');

btnToggle.addEventListener("click", () => {
    let allChecked = true;

    colors.forEach(color => {
        if(!color.checked){
            allChecked = false;
        }
    });

    if(!allChecked){
            colors.forEach(color => color.checked = true);
    }
    else{
        colors.forEach(color => color.checked = false);
    }

});