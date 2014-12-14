
var dataTables = {};

function fixTitle(string) {
  return capitaliseFirstLetter(string).replace(/_/g, " ");
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function transform(attrName, id, dataName, filtro) {
  var dataResult = dataTables[dataName];
    d3.select("#" + id + " tbody").selectAll("tr").remove();

// Header
    var th = d3.select("#" + id + " thead").select('tr').selectAll("th")
            .data(jsonToArray(dataResult[0]))
            .enter().append("th")
            .attr("onclick", function (d, i) { return "transform('" + d[0] + "', '" + id + "', '" + dataName + "','" + filtro + "');";})
            .text(function(d) { return fixTitle(d[0]); });

// Rows
    var tr = d3.select("#" + id + " tbody").selectAll("tr")
            .data(dataResult)
            .enter().append("tr")
            .filter(function(d) { 
              if (d[filtro] != undefined) {
                return d[filtro] > 0;
              } else {
                return d;
              }
            })
            .sort(function (a, b) { return a == null || b == null ? 0 : valueCompare(a[attrName], b[attrName]); });

// Cells
    var td = tr.selectAll("td")
            .data(function(d) { return jsonToArray(d); })
            .enter().append("td")
            .attr("onclick", function (d, i) { return "transform('" + d[0] + "', '" + id + "', '" + dataName + "','" + filtro + "');";})
            .text(function(d) { return d[1]; });

}

function valueCompare(a, b) {
  
  if (typeof a == 'string' || a instanceof String) {
    a = a.toLowerCase();
      b = b.toLowerCase();
  }
    
    return a < b ? 1 : a == b ? 0 : -1;
}

function jsonKeyValueToArray(k, v) {return [k, v];}

function jsonToArray(json) {
    var ret = new Array();
    var key;
    for (key in json) {
        if (json.hasOwnProperty(key)) {
            ret.push(jsonKeyValueToArray(key, json[key]));
        }
    }

    return ret;
};



function JSON2CSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    if ($("#labels").is(':checked')) {
        //var head = array[0];
        if ($("#quote").is(':checked')) {
            for (var index in array[0]) {
                var value = fixTitle(index) + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[0]) {
                line += fixTitle(index) + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
        var line = '';

        if ($("#quote").is(':checked')) {
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
        } else {
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;
    
}

function setDataDowload(id, dataName, parametros) {

  $("#" + id).on("click", function() {
    console.log(dataName);
    console.log(dataTables['tabla1']);
    var csv = JSON2CSV(dataTables[dataName]);
    
    blob = new Blob([csv], { type: 'text/csv' });
    var csvUrl = URL.createObjectURL(blob);
    
    $("#" + id).attr({'download': dataName + '_' + parametros + '.csv',
      'href': csvUrl});
  });
}

/**
 * Descargar el archivo a partir del string con formato CSV creado.
 * 
 * @param id
 *            Id del boton
 * @param csv
 *            Datos separados por coma
 * @param name
 *            Nombre del archivo
 */
function descargar(id, csv, name) {

  if (csv) {
    $("#" + id).show();
    $("#" + id).on("click", function() {
      blob = new Blob([csv], { type: 'text/csv' });
      var csvUrl = URL.createObjectURL(blob);
      
      fechaDesde = "";
      fechaHasta = "";
      fechaFinal = " ( " + fechaDesde + " a " + fechaHasta + " ) ";
      parametros = fechaDesde.replace(/-/g, '') + "-" + fechaHasta.replace(/-/g, '');
      
      $("#" + id).attr({'download': name + '_' + parametros + '.csv',
        'href': csvUrl});
    });
  }
  
}


$("#print").on("click", function() {
  window.print();
});