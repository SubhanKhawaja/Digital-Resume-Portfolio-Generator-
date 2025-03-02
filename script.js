// function addNewWEField() {
//     // console.log('adding new')
//     let newNode = document.createElement("textarea");
//     newNode.classList.add("form-control");
//     newNode.classList.add("weField");
//     newNode.setAttribute("rows", 3);

//     let weOb = document.getElementById("we");
//     let weAddButtonOb = document.getElementById("weAddButton");

//     weOb.insertBefore(newNode, weAddButtonOb);
// }
function addNewWEField() {
    // console.log('loading');
let newNode=document.createElement('textarea')
newNode.classList.add('form-control')
newNode.classList.add('weField')
newNode.classList.add('mt-2')
newNode.setAttribute('rows', 3)
newNode.setAttribute('placeholder','Enter here')

let weOb=document.getElementById('we')
let weAddButtonOb=document.getElementById('weAddButton')

weOb.insertBefore(newNode,weAddButtonOb)
} 

function addNewAQField() {
    // console.log('loading');
let newNode=document.createElement('textarea')
newNode.classList.add('form-control')
newNode.classList.add('eqField')
newNode.classList.add('mt-2')
newNode.setAttribute('rows', 3)
newNode.setAttribute('placeholder','Enter here')

let aqOb=document.getElementById('aq')
let aqAddButtonOb=document.getElementById('aqAddButton')

aqOb.insertBefore(newNode,aqAddButtonOb)
} 
    
//generating cv//
function generateCV() {
    // console.log('cv')
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    // direct
    document.getElementById('nameT2').innerHTML=nameField;
    // contact
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
    // email
    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;
    // address
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    // fbfield
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    // instafield
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
    // linkedinfield
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;
    // objective
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    // work experience

    let wes=document.getElementsByClassName('weField')

    let str="";

    for( let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;

    // academic qualification

    let aqs=document.getElementsByClassName('eqField')

    let str1="";

    for( let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str1;

    // setting img

    let file=document.getElementById('imgField').files[0];

    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    // set img to template

    reader.onloadend = function () {
        document.getElementById('imgTemplate').src=reader.result;
    }

    // Show the print button container
    document.getElementById('print-button-container').style.display = 'block';

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

// print cv

function printCV() {
    window.print();
}