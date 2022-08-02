// const checkAll = document.getElementsByName('checkAll');
// const checkboxes = document.getElementsByName('check');

// checkAll.forEach((element) => {
//     element.addEventListener('click', () => {
//         const checked = element.checked;
//         checkboxes.forEach((checkbox) => {
//             checkbox.checked = checked;
//         })
//     })
// });


const checkAll = document.getElementsByName('checkAll');
const checkboxes = document.getElementsByName('check');

checkAll.forEach((element) => {
    element.addEventListener('click', () => {
        const checked = element.checked;
        checkboxes.forEach((checkbox) => {
            checkbox.checked = checked;
        })
    })
});