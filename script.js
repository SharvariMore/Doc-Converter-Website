/*For uploading single file*/

/*const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function(){
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if(realFileBtn.value)
    {
        customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        alert("File uploaded successfully!")
    }
    else
    {
        customTxt.innerHTML = "No file chosen, yet";
    }
});*/

/*For uploading mutiple files*/

function myFunction() {
    var x = document.getElementById("myFile").multiple;
}
