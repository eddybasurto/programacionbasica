function crearTabla() {
    var row = parseInt(document.getElementById("rows").value);
    var col = parseInt(document.getElementById("cols").value);

    var bs = '<body style="background-color:#F6DDCC;">';
    var be = "</body>";
    var tablestart="<table id=myTable border=1>";
    var tableend = "</table>";
    var trstart = "<tr bgcolor=#ff9966>";
    var trend = "</tr>";
    var tdstart = "<td>";
    var tdend = "</td>";
    var data="data in cell";
    var str1=tablestart + trstart + tdstart + data + tdend + trend + tableend;
    
    document.write(bs);
    document.write(be);
    
    document.write(tablestart);

    for (var r=0;r<row;r++) {
        document.write(trstart);
        for(var c=0; c<col; c++) {
            document.write(tdstart+"Row."+r+" Col."+c+tdend);
        }
    }

    document.write(tableend);
    document.write("<br/>");
    var s="<button id="+"delete"+" onclick="+"deleteTable()"+">Borrar primera fila </button>";
    document.write(s);
    var relod="<button id="+"relod"+" onclick="+"reloadPage()"+">Recargar página </button>";
    document.write(relod);
}

function deleteTable() {
    var dr=0;
    if(confirm("Borrará la primera fila..!!")) {
        document.getElementById("myTable").deleteRow(dr);
    }
}

function reloadPage(){
    location.reload();
}