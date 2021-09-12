window.onload = function() {
    document.getElementById("btn").addEventListener("click", upperCaseInput);

    function upperCaseInput() {
        var inputData = document.getElementById("input_fiel").value;
        document.getElementById("output").innerHTML = inputData.toUpperCase();
    }


    const holder = document.querySelectorAll('.btn_holder');
    const radio = document.querySelectorAll('.radiobtn');

    const removeOthers = (index) => {
        for (let i = 0; i < 3; i++) {
            if (i !== index) {
                holder[i].style.display = "none";
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        radio[i].addEventListener('click', () => {
            removeOthers(i);
        });
    }

}

function changeColor() {
    document.getElementById("hovertext").style.fontSize = "80px";
    document.getElementById("hovertext").style.color = "red";
}


function addrow() {
    var table = document.getElementById("mytbl");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "2";
    cell2.innerHTML = "Aj";
    cell3.innerHTML = "CSE";

}

function calArea() {
    var length = document.getElementById("length").value;
    var breath = document.getElementById("breath").value;
    document.getElementById("calbtn").remove();
    document.getElementById("display").innerHTML = "Area is " + length * breath;
    document.getElementById("display").style.fontSize = "30px";
}