var localData = [];
var dataRows;
$(document).ready(
    function(){
        jQuery.ajax("https://public.opencpu.org/ocpu/library/", {
            dataType: "text",
            success: fillArray
        });
        $("#load").click(
            function(){
                dataRows = Number($("#item-count").val());
                if (dataRows > 0){
                    removeTable();
                    drawTable();
                }
            }
        );
        $("#clear").click(
            function(){
                removeTable();
            }
        );
    }
);
function fillArray(data){
    localData = data.split("\n");
}
function removeTable(){
    $("#data-table").children().remove();
}
function drawTable(){
    var tableHeader = $("<tr/>").appendTo('#data-table');
    tableHeader.append($("<td>Number</td>"));
    tableHeader.append($("<td>Item</td>"));

    for (var i=0; i < dataRows; i++){
        var row = $("<tr/>", {class: "data-row", id: "data-row-"+(i+1)}).appendTo('#data-table');
        row.append($("<td class='number-col'>"+ (i+1) +"</td>"));
        row.append($("<td class='item-col'>" + localData[i] + "</td>"));
    }

    $(".number-col").click(function(){
        $(this).parent().remove();
    });

    $(".item-col").click(function(){
        var win = window.open("https://translate.google.ru/#en/ru/" + this.textContent, '_blank');
        win.focus();
    });
}