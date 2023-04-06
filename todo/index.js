// var add = document.getElementById('addBtn');
// add.addEventListener('click', addList);
// var itemList = [];

// function addList() {
//     var item = document.querySelector('#new').value;
//     if (item != null && item != "") {
//         itemList.push(item);
//         document.getElementById('new').value = "";
//         document.getElementById('new').focus();
//     }
//     showList();
// };

// function showList() {
//     var list = "<ul>";
//     for (var i = 0; i < itemList.length; i++) {
//         list += "<li>" + itemList[i] + "<span class='close' id=" + i + "> 삭제 </span></li>";
//         console.log('함수 실행');
//     }
//     list += "</ul>";

//     document.getElementById('itemList').innerHTML = list;

//     var remove = document.querySelectorAll('.close');

//     for (var i = 0; i < remove.length; i++) {
//         remove[i].addEventListener('click', removeList);
//     }
// }

// function removeList() {
//     var id = this.getAttribute("id");
//     itemList.splice(id,1);
//     showList();
// }

//Model

var Model = (function () {
    var itemList = [];

    var addList = function (item) {
        if(item != null || item != ""){
            itemList.push(item);
        }
        document.getElementById('new').value = "";
        document.getElementById('new').focus();
    }

    var removeList = function (id) {
        itemList.splice(id, 1);
    }

    return {
        itemList: itemList,
        addList: addList,
        removeList: removeList,
    }

})();

//Controller

var Controller = (function () {
    
    var addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', () => {
        var item = document.querySelector('#new').value;
        Model.addList(item);
        View.showList(Model.itemList);
    });

    // var removeList = function () {
    //     var id = this.getAttribute("id");
    //     Model.removeList(id);
    //     View.showList(Model.itemList);
    // }
})();

//View

var View = (function () {

    var showList = function (itemList) {
        var list = "<ul>";
        for (var i = 0; i < itemList.length; i++) {
            list += "<li>" + itemList[i] + "<span class='close' id=" + i + "> 삭제 </span></li>";
            console.log('함수 실행');
        }
        list += "</ul>";

        document.getElementById('itemList').innerHTML = list;

        // var remove = document.querySelectorAll('.close');

        // for (var i = 0; i < remove.length; i++) {
        //     remove[i].addEventListener('click', removeList);
        // }
    }

    return {
        showList:showList,
    };
})();