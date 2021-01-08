var allItems = document.querySelectorAll(".td-item");
var allItemCheckboxes = document.querySelectorAll(".td-item input[type='checkbox']");
var itemCount = allItems.length;
var allRemovebtns = document.querySelectorAll(".td-btn");

for (let i = 0; i < itemCount; i++) {
    allItems[i].addEventListener("click", function(){
            document.getElementById("checkbox" + i).checked = !document.getElementById("checkbox" + i).checked;
    })
    // Including listener on the checkboxes because otherwise when the user checks the checkbox it toggles .checked twice
    allItemCheckboxes[i].addEventListener("click", function(){
        document.getElementById("checkbox" + i).checked = !document.getElementById("checkbox" + i).checked;
    })
    // Same for remove buttons
    allRemovebtns[i].addEventListener("click", function(){
        document.getElementById("checkbox" + i).checked = !document.getElementById("checkbox" + i).checked;
    });
}