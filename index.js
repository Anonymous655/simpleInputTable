
let btn = document.getElementById("submit")
let table = document.getElementById("table")
let childElement;
let sNo = 0




btn.addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phNumber = document.getElementById("phNumber").value
    let img = document.getElementById("image")
    var inputs = document.querySelectorAll('input');
    if(name === '' || email === '' || phNumber.length !==  10 ){
        alert("Please, Enter valid credentials")
        return 
    }

    childElement = 
    `
        <td>${++sNo}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phNumber}</td>
        <td><img id="tableImage" src='${URL.createObjectURL(img.files[0])}' alt="An image" /></td>
    `
    let tr = document.createElement("tr")
    tr.innerHTML = childElement
 
    // if (img.files && img.files[0]) {
    //     var src = URL.createObjectURL(img.files[0]);
    //     let imgP = document.getElementById('tableImage')
    //     imgP.src = src
    // }


    console.log(img)
 

    table.appendChild(tr)
    inputs.forEach(input =>  input.value = '');

    
    
})
// img.addEventListener('change', (e) => {
//     if (e.target.files && e.target.files[0]) {
//         var reader = new FileReader();    
//         reader.onload = function (e) {
//             document.getElementById('tableImage')
//                 .attr('src', e.target.result);
    
//             };
//             reader.readAsDataURL(input.files[0]);
//         }
// })
