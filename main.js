$(document).ready(
    function(){
        $("#load").click(
            function(event){
                var dataRows = Number($("#item-count").val());
                if (dataRows > 0){
                    jQuery.ajax("https://public.opencpu.org/ocpu/library/", {
                        dataType: "text",
                        success: loadData
                    });
                }
            }
        );
    }
);

function loadData(fromServer){
    var dataRows = Number($("#item-count").val());
    var resultArray = [];
    for (var i = 0; i<dataRows; i++){
        resultArray.push(fromServer.split("\n")[i]);
    }
    createTable(resultArray);
}

function createTable(dataArray){
    for (var i=0; i < dataArray.length; i++){
        var row = $("<tr/>", {class: "data-row", id: "data-row-"+(i+1)}).appendTo('#data-table');
        row.append($("<td class='number-col'>"+ (i+1) +"</td>"));
        row.append($("<td>"+ dataArray[i] +"</td>"));
    }
    $(".number-col").click(function(){
        $(this).parent().remove();
    });
}