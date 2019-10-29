var friendlist = ["Larry", "Marry", "Garry", "Mike", "Zack", "Luccy"];
        
window.onload = build;
        
document.getElementById('addNew').addEventListener('click', addNewFriend,false);
        
function addNewFriend(){
    var newFriend = document.getElementById('addFriend').value;
    friendlist.push(newFriend);
    build();
}
        
function build(){
    var html = "<h1>Friend List table</h1>";
    html += "<table>";
    for(var i=0; i<friendlist.length; i++){
        html += "<tr id='id" + i + "' data-row='" + i + "'>"
        html += "<td>" + friendlist[i] + "</td>";
        html += "<td><a href='#' data-action='delete'>Delete</a></td>";
        html += "<td><a href='#' data-action='edit'>Edit</a></td>"
        html += "</tr>";
    }
    html += "</table>";
    document.querySelector('.output').innerHTML = html;
            
    var dataActionDel = document.querySelectorAll('[data-action="delete"]');
    for(var i=0; i<dataActionDel.length; i++){
        dataActionDel[i].addEventListener('click', function(){
            event.preventDefault();
            var indexTrValue = this.closest("[data-row]").getAttribute("data-row");
            friendlist.splice(indexTrValue, 1);
            build();
        });
    }
            
    var dataActionEdit = document.querySelectorAll('[data-action="edit"]');
    for(var i=0; i<dataActionEdit.length; i++){
            dataActionEdit[i].addEventListener('click', function(){
                event.preventDefault();
                var row = this.closest("[data-row]");
                var rowId = row.getAttribute('data-row');
                row.style.backgroundColor = "yellow";
                var td = row.firstElementChild;
                var input = document.createElement('input');
                input.type = "text";
                input.value = td.innerText;
                td.innerHTML = "";
                td.appendChild(input);
                input.focus();
                input.onblur = function(){
                    td.removeChild(input);
                    td.innerHTML = input.value;
                    friendlist[rowId] = input.value;
                    row.style.backgroundColor = "white";
                }
        });
    } 
}