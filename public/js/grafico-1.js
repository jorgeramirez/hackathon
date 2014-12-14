var data;
var dataBar;

var formatAsPercentage = d3.format("%"), formatAsPercentage1Dec = d3
    .format(".1%"), formatAsInteger = d3.format(","), fsec = d3.time
    .format("%S s"), fmin = d3.time.format("%M m"), fhou = d3.time
    .format("%H h"), fwee = d3.time.format("%a"), fdat = d3.time
    .format("%d d"), fmon = d3.time.format("%b");

var color = d3.scale.category20c();

var depths = ['Todos', 'nivel_entidad', 'entidad', 'uoc', 'tipo'];

var tipoBar;

function graficar(data1, data2, tipo) {
  tipoBar = tipo;

  data1 = '[{"nivel_entidad":"MUNICIPALIDADES","cantidad":3,"tipo":"UEP","entidad":"MUNICIPALIDAD DE GRAL JOSE M. BRUGUEZ","uoc":"GRAL JOSE M. BRUGUEZ"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":6,"tipo":"SUOC","entidad":"MINISTERIO DE SALUD PUBLICA Y BIENESTAR SOCIAL","uoc":"DIRECCION GENERAL DE SALUD AMBIENTAL-(DIGESA)"},{"nivel_entidad":"ENTIDADES PÚBLICAS DE SEGURIDAD SOCIAL","cantidad":7,"tipo":"UOC","entidad":"INSTITUTO DE PREVISIÓN SOCIAL","uoc":"UOC IPS"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":3,"tipo":"UEP","entidad":"MINISTERIO DE HACIENDA","uoc":"APOYO AL DESARROLLO DE UN SISTEMA DE ADQ. PUBLICAS"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":4,"tipo":"UOC","entidad":"UNIVERSIDAD NACIONAL DE ASUNCIÓN","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":5,"tipo":"UEP","entidad":"UNIVERSIDAD NACIONAL DE CONCEPCIÓN","uoc":"RECTORADO"},{"nivel_entidad":"GOBIERNOS DEPARTAMENTALES","cantidad":6,"tipo":"UOC","entidad":"GOBIERNO DEPARTAMENTAL DE PRESIDENTE HAYES","uoc":"UOC PRESIDENTE HAYES"},{"nivel_entidad":"PODER JUDICIAL","cantidad":3,"tipo":"SUOC","entidad":"CORTE SUPREMA DE JUSTICIA","uoc":"ENCARNACION"}]'
  data2 = '[{"nivel_entidad":"MUNICIPALIDADES","cantidad":0,"tipo":"UEP","entidad":"MUNICIPALIDAD DE GRAL JOSE M. BRUGUEZ","tipo_protesta":"Impugnado","uoc":"GRAL JOSE M. BRUGUEZ"},{"nivel_entidad":"MUNICIPALIDADES","cantidad":3,"tipo":"UEP","entidad":"MUNICIPALIDAD DE GRAL JOSE M. BRUGUEZ","tipo_protesta":"Adjudicado","uoc":"GRAL JOSE M. BRUGUEZ"},{"nivel_entidad":"MUNICIPALIDADES","cantidad":0,"tipo":"UEP","entidad":"MUNICIPALIDAD DE GRAL JOSE M. BRUGUEZ","tipo_protesta":"Desierto","uoc":"GRAL JOSE M. BRUGUEZ"},{"nivel_entidad":"MUNICIPALIDADES","cantidad":0,"tipo":"UEP","entidad":"MUNICIPALIDAD DE GRAL JOSE M. BRUGUEZ","tipo_protesta":"Anulado","uoc":"GRAL JOSE M. BRUGUEZ"},{"nivel_entidad":"MUNICIPALIDADES","cantidad":0,"tipo":"UEP","entidad":"MUNICIPALIDAD DE GRAL JOSE M. BRUGUEZ","tipo_protesta":"Publicado","uoc":"GRAL JOSE M. BRUGUEZ"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":0,"tipo":"SUOC","entidad":"MINISTERIO DE SALUD PUBLICA Y BIENESTAR SOCIAL","tipo_protesta":"Impugnado","uoc":"DIRECCION GENERAL DE SALUD AMBIENTAL-(DIGESA)"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":3,"tipo":"SUOC","entidad":"MINISTERIO DE SALUD PUBLICA Y BIENESTAR SOCIAL","tipo_protesta":"Adjudicado","uoc":"DIRECCION GENERAL DE SALUD AMBIENTAL-(DIGESA)"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":0,"tipo":"SUOC","entidad":"MINISTERIO DE SALUD PUBLICA Y BIENESTAR SOCIAL","tipo_protesta":"Desierto","uoc":"DIRECCION GENERAL DE SALUD AMBIENTAL-(DIGESA)"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":1,"tipo":"SUOC","entidad":"MINISTERIO DE SALUD PUBLICA Y BIENESTAR SOCIAL","tipo_protesta":"Anulado","uoc":"DIRECCION GENERAL DE SALUD AMBIENTAL-(DIGESA)"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":2,"tipo":"SUOC","entidad":"MINISTERIO DE SALUD PUBLICA Y BIENESTAR SOCIAL","tipo_protesta":"Publicado","uoc":"DIRECCION GENERAL DE SALUD AMBIENTAL-(DIGESA)"},{"nivel_entidad":"ENTIDADES PÚBLICAS DE SEGURIDAD SOCIAL","cantidad":1,"tipo":"UOC","entidad":"INSTITUTO DE PREVISIÓN SOCIAL","tipo_protesta":"Impugnado","uoc":"UOC IPS"},{"nivel_entidad":"ENTIDADES PÚBLICAS DE SEGURIDAD SOCIAL","cantidad":5,"tipo":"UOC","entidad":"INSTITUTO DE PREVISIÓN SOCIAL","tipo_protesta":"Adjudicado","uoc":"UOC IPS"},{"nivel_entidad":"ENTIDADES PÚBLICAS DE SEGURIDAD SOCIAL","cantidad":0,"tipo":"UOC","entidad":"INSTITUTO DE PREVISIÓN SOCIAL","tipo_protesta":"Desierto","uoc":"UOC IPS"},{"nivel_entidad":"ENTIDADES PÚBLICAS DE SEGURIDAD SOCIAL","cantidad":0,"tipo":"UOC","entidad":"INSTITUTO DE PREVISIÓN SOCIAL","tipo_protesta":"Anulado","uoc":"UOC IPS"},{"nivel_entidad":"ENTIDADES PÚBLICAS DE SEGURIDAD SOCIAL","cantidad":1,"tipo":"UOC","entidad":"INSTITUTO DE PREVISIÓN SOCIAL","tipo_protesta":"Publicado","uoc":"UOC IPS"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":0,"tipo":"UEP","entidad":"MINISTERIO DE HACIENDA","tipo_protesta":"Impugnado","uoc":"APOYO AL DESARROLLO DE UN SISTEMA DE ADQ. PUBLICAS"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":2,"tipo":"UEP","entidad":"MINISTERIO DE HACIENDA","tipo_protesta":"Adjudicado","uoc":"APOYO AL DESARROLLO DE UN SISTEMA DE ADQ. PUBLICAS"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":0,"tipo":"UEP","entidad":"MINISTERIO DE HACIENDA","tipo_protesta":"Desierto","uoc":"APOYO AL DESARROLLO DE UN SISTEMA DE ADQ. PUBLICAS"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":0,"tipo":"UEP","entidad":"MINISTERIO DE HACIENDA","tipo_protesta":"Anulado","uoc":"APOYO AL DESARROLLO DE UN SISTEMA DE ADQ. PUBLICAS"},{"nivel_entidad":"PODER EJECUTIVO","cantidad":1,"tipo":"UEP","entidad":"MINISTERIO DE HACIENDA","tipo_protesta":"Publicado","uoc":"APOYO AL DESARROLLO DE UN SISTEMA DE ADQ. PUBLICAS"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":0,"tipo":"UOC","entidad":"UNIVERSIDAD NACIONAL DE ASUNCIÓN","tipo_protesta":"Impugnado","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":1,"tipo":"UOC","entidad":"UNIVERSIDAD NACIONAL DE ASUNCIÓN","tipo_protesta":"Adjudicado","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":0,"tipo":"UOC","entidad":"UNIVERSIDAD NACIONAL DE ASUNCIÓN","tipo_protesta":"Desierto","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":1,"tipo":"UOC","entidad":"UNIVERSIDAD NACIONAL DE ASUNCIÓN","tipo_protesta":"Anulado","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":2,"tipo":"UOC","entidad":"UNIVERSIDAD NACIONAL DE ASUNCIÓN","tipo_protesta":"Publicado","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":1,"tipo":"UEP","entidad":"UNIVERSIDAD NACIONAL DE CONCEPCIÓN","tipo_protesta":"Impugnado","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":1,"tipo":"UEP","entidad":"UNIVERSIDAD NACIONAL DE CONCEPCIÓN","tipo_protesta":"Adjudicado","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":1,"tipo":"UEP","entidad":"UNIVERSIDAD NACIONAL DE CONCEPCIÓN","tipo_protesta":"Desierto","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":0,"tipo":"UEP","entidad":"UNIVERSIDAD NACIONAL DE CONCEPCIÓN","tipo_protesta":"Anulado","uoc":"RECTORADO"},{"nivel_entidad":"UNIVERSIDADES NACIONALES","cantidad":2,"tipo":"UEP","entidad":"UNIVERSIDAD NACIONAL DE CONCEPCIÓN","tipo_protesta":"Publicado","uoc":"RECTORADO"},{"nivel_entidad":"GOBIERNOS DEPARTAMENTALES","cantidad":2,"tipo":"UOC","entidad":"GOBIERNO DEPARTAMENTAL DE PRESIDENTE HAYES","tipo_protesta":"Suspendido","uoc":"UOC PRESIDENTE HAYES"},{"nivel_entidad":"GOBIERNOS DEPARTAMENTALES","cantidad":2,"tipo":"UOC","entidad":"GOBIERNO DEPARTAMENTAL DE PRESIDENTE HAYES","tipo_protesta":"Adjudicado","uoc":"UOC PRESIDENTE HAYES"},{"nivel_entidad":"GOBIERNOS DEPARTAMENTALES","cantidad":1,"tipo":"UOC","entidad":"GOBIERNO DEPARTAMENTAL DE PRESIDENTE HAYES","tipo_protesta":"Desierto","uoc":"UOC PRESIDENTE HAYES"},{"nivel_entidad":"GOBIERNOS DEPARTAMENTALES","cantidad":1,"tipo":"UOC","entidad":"GOBIERNO DEPARTAMENTAL DE PRESIDENTE HAYES","tipo_protesta":"Anulado","uoc":"UOC PRESIDENTE HAYES"},{"nivel_entidad":"GOBIERNOS DEPARTAMENTALES","cantidad":0,"tipo":"UOC","entidad":"GOBIERNO DEPARTAMENTAL DE PRESIDENTE HAYES","tipo_protesta":"Publicado","uoc":"UOC PRESIDENTE HAYES"},{"nivel_entidad":"PODER JUDICIAL","cantidad":0,"tipo":"SUOC","entidad":"CORTE SUPREMA DE JUSTICIA","tipo_protesta":"Impugnado","uoc":"ENCARNACION"},{"nivel_entidad":"PODER JUDICIAL","cantidad":1,"tipo":"SUOC","entidad":"CORTE SUPREMA DE JUSTICIA","tipo_protesta":"Adjudicado","uoc":"ENCARNACION"},{"nivel_entidad":"PODER JUDICIAL","cantidad":0,"tipo":"SUOC","entidad":"CORTE SUPREMA DE JUSTICIA","tipo_protesta":"Desierto","uoc":"ENCARNACION"},{"nivel_entidad":"PODER JUDICIAL","cantidad":1,"tipo":"SUOC","entidad":"CORTE SUPREMA DE JUSTICIA","tipo_protesta":"Anulado","uoc":"ENCARNACION"},{"nivel_entidad":"PODER JUDICIAL","cantidad":1,"tipo":"SUOC","entidad":"CORTE SUPREMA DE JUSTICIA","tipo_protesta":"Publicado","uoc":"ENCARNACION"}]'
  
  
  if (data1 && data2) {
    
    
    $('#grafico').show();
  
    json = JSON.parse(data1);
    $("#col1").empty();
    console.log(json);
  
    var nest = d3.nest().key(function(d) {
      return d.nivel_entidad;
    }).key(function(d) {
      return d.entidad;
    }).key(function(d) {
      return d.uoc;
    }).rollup(function(d) {
      return d3.sum(d, function(g) {
        return g.cantidad;
      });
    }).entries(json);
  
    var setValue = function(d) {
  
      if (d.values.length != undefined) {
        d.values.forEach(setValue);
      } else {
        d.value = d.values;
        delete d['values'];
      }
    }
  
    nest.forEach(setValue);
  
    data = {
      key : "Todos",
      values : nest
    };
    
    
    
    dsBarChart(data2);
    
    
    // ==================================================
    
  
    var width = 860, height = 430, radius = Math.min(width, height) / 2;
  
    var x = d3.scale.linear().range([ 0, 2 * Math.PI ]);
  
    var y = d3.scale.sqrt().range([ 0, radius ]);
  
    //var color = d3.scale.category20c();
  
    var svg = d3.select("#col1").append("svg").attr("width", width).attr(
        "height", height).append("g").attr("transform",
        "translate(215,215)");
  
    var partition = d3.layout.partition().value(function(d) {
      return d.value;
    }).children(function(d) {
      return d.values;
    });
  
    var arc = d3.svg.arc().startAngle(function(d) {
      return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
    }).endAngle(function(d) {
      return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
    }).innerRadius(function(d) {
      return Math.max(0, y(d.y));
    }).outerRadius(function(d) {
      return Math.max(0, y(d.y + d.dy) - 4);
    });
  
    var path = svg.selectAll("path").data(partition.nodes(data)).enter()
        .append("path")
        .attr("d", arc)
        .style("fill", function(d) {
          return color(d.key);
        })
        .on("click", click)
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        .on("mousemove", mousemove)
        ;
    
    var tooltip = d3.select("body")
          .append("div")
          .style("position", "absolute")
          .style("z-index", "10")
          .style("visibility", "hidden");
    
    function click(d) {
      path.transition().duration(750).attrTween("d", arcTween(d));
      
      var keys = createKeys();
  
      keys[depths[d.depth]] = d.key;
      
      var parent = d.parent;
      while (parent != undefined) {
        keys[depths[parent.depth]] = parent.key;
        parent = parent.parent;
      }
      
      updateBarChart(keys, color(d.key));
      dsDetalleBarChart(d);
    }
  
    function mouseover(d) {
      
      tooltip
      .html( d.key + " <strong>[" + d.value +"]</strong>")
      //.text(d.key + (d.value ? " " + d.value + ""  : ''))
      .style("visibility", "visible");
      
      //content.append("h2").attr("id", "current").text(d.key + (d.value ? " - " + (d.value) : ''));
  
      var arc2 = d3.svg.arc().startAngle(function(d) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
      }).endAngle(function(d) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
      }).innerRadius(function(d) {
        return Math.max(0, y(d.y) - 2);
      }).outerRadius(function(d) {
        return Math.max(0, y(d.y + d.dy) - 2);
      });
  
      d3.select(this).attr("d", arc2)
      .style("fill-opacity", function(d) { return 0.8; })
      ;
  
      /*
       * d3.select(this).transition() .duration(750) .attr("d", arc2) ;
       */
    }
    
    function mousemove(d) {
      tooltip.style("top",
            (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    }
  
    function mouseout(d) {
      tooltip.style("visibility", "hidden");
      //content.html('');
      var arc2 = d3.svg.arc().startAngle(function(d) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
      }).endAngle(function(d) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
      }).innerRadius(function(d) {
        return Math.max(0, y(d.y));
      }).outerRadius(function(d) {
        return Math.max(0, y(d.y + d.dy) - 4);
      });
  
      d3.select(this).attr("d", arc2)
      .style("fill-opacity", function(d) { return 1; })
      ;
  
    }
  
    d3.select(self.frameElement).style("height", height + "px");
  
    // Interpolate the scales!
    function arcTween(d) {
      var xd = d3.interpolate(x.domain(), [ d.x, d.x + d.dx ]), yd = d3
          .interpolate(y.domain(), [ d.y, 1 ]), yr = d3.interpolate(y
          .range(), [ d.y ? 20 : 0, radius ]);
      return function(d, i) {
        return i ? function(t) {
          return arc(d);
        } : function(t) {
          x.domain(xd(t));
          y.domain(yd(t)).range(yr(t));
          return arc(d);
        };
      };
    }
  
    // Para la tabla
    dataTables['clasificacion_por_convocante'] = json;
    transform('cantidad', 'tabla-resultado', 'clasificacion_por_convocante','cantidad');
    
    fechaDesde = "";
    fechaHasta = "";
    fechaFinal = " ( " + fechaDesde + " a " + fechaHasta + " ) ";
    parametrosNombreArchivo = fechaDesde.replace(/-/g, '') + "-" + fechaHasta.replace(/-/g, '');
    setDataDowload('download-datos', 'clasificacion_por_convocante', parametrosNombreArchivo);
    //console.log(fechaFinal);
    
    $( "#datos" ).empty();
    $( "#datos" ).append(fechaFinal);
    
    console.log(data.value);
    dsDetalleBarChart(data);
    
    $('.report-area').show();
  }

  
}

function createKeys() {
  var keys = {
      nivel_entidad: null,
      entidad: null,
      uoc: null,
      tipo: null
  };
  
  return keys;
}

function datasetBarChosen(keys) {

  /*var sumatorias = {
      'Contra Pliego' : {cantidad :0, nombre : "Pliego"},
      'Contra Adjudicación' : {cantidad :0, nombre : "Adjudicación"},
      'Contra Cancelación' : {cantidad :0, nombre : "Cancelación"},
      'Contra Pre Calificación' : {cantidad :0, nombre : "Pre Calif."},
      'Contra Declaración Desierta' : {cantidad :0, nombre : "Decl. Desierta"},
  };*/
  var sumatorias = {
      'Publicado' : {cantidad :0, nombre : "Publicado"},
      'Adjudicado' : {cantidad :0, nombre : "Adjudicado"},
      'Suspendido' : {cantidad :0, nombre : "Suspendido"},
      'Desierto' : {cantidad :0, nombre : "Desierto"},
      'Anulado' : {cantidad :0, nombre : "Anulado"},
      'Impugnado' : {cantidad :0, nombre : "Impugnado"}
  };


  var sumatorias2 = {
      'Publicado' : {cantidad :0, nombre : "Publicado"},
      'Adjudicado' : {cantidad :0, nombre : "Adjudicado"},
      'Suspendido' : {cantidad :0, nombre : "Suspendido"},
      'Desierto' : {cantidad :0, nombre : "Desierto"},
      'Anulado' : {cantidad :0, nombre : "Anulado"},
      'Impugnado' : {cantidad :0, nombre : "Impugnado"}
  };
  
  var ds = [];

  datasetBarChart.forEach(function (x) {
    
    if (tipoBar == 'tipos'){
      if (keys.nivel_entidad == null) { //total
        sumatorias[x.tipo_protesta].cantidad += x.cantidad;
      } else  if (x.nivel_entidad == keys.nivel_entidad &&
          (keys.entidad == null || x.entidad == keys.entidad) &&
          (keys.uoc == null || x.uoc == keys.uoc) &&
          (keys.tipo == null || x.tipo == keys.tipo)) {
        
        sumatorias[x.tipo_protesta].cantidad += x.cantidad;
         
      }
    }
    else if (tipoBar == 'estados'){
      if (keys.nivel_entidad == null) { //total
        sumatorias2[x.estado].cantidad += x.cantidad;
      } else  if (x.nivel_entidad == keys.nivel_entidad &&
          (keys.entidad == null || x.entidad == keys.entidad) &&
          (keys.uoc == null || x.uoc == keys.uoc) &&
          (keys.tipo == null || x.tipo == keys.tipo)) {
        
        sumatorias2[x.estado].cantidad += x.cantidad;
      }
    }
    
  });
  
  if (tipoBar == 'tipos'){
    for (var key in sumatorias) {
      ds.push(sumatorias[key]);
    }
  } else {
    for (var key in sumatorias2) {
      ds.push(sumatorias2[key]);
    }
  }
  

  return ds;
}


function dsBarChartBasics() {

  var margin = {top: 50, right: 25, bottom: 20, left: 0},
  width = 445 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom,
  colorBar = d3.scale.category20c(),
  barPadding = 1
  ;
  
  return {
    margin : margin,
    width : width,
    height : height,
    colorBar : colorBar,
    barPadding : barPadding
  };
}

function dsBarChart(data1) {

  //console.log("Entro a dsBarChart");

  $("#barChart").empty();
  json2 = JSON.parse(data1);
  datasetBarChart = json2;

  var keys = createKeys();
  keys["Todos"] = "Todos";
  
  var firstDatasetBarChart = datasetBarChosen(keys);
  
  var colorChosen = color("Todos");

  var basics = dsBarChartBasics();
  
  //var color = d3.scale.category20c();

  var margin = basics.margin, width = basics.width, height = basics.height, colorBar = basics.colorBar, barPadding = basics.barPadding;

  var xScale = d3.scale.linear().domain([ 0, firstDatasetBarChart.length ])
      .range([ 0, width ]);

  // Create linear y scale
  // Purpose: No matter what the data is, the bar should fit into the svg
  // area; bars should not
  // get higher than the svg height. Hence incoming data needs to be scaled to
  // fit into the svg area.
  var yScale = d3.scale.linear()
  // use the max funtion to derive end point of the domain (max value of the
  // dataset)
  // do not use the min value of the dataset as min of the domain as otherwise
  // you will not see the first bar
  .domain([ 0, d3.max(firstDatasetBarChart, function(d) {
    return d.cantidad;
  }) ])
  // As coordinates are always defined from the top left corner, the y
  // position of the bar
  // is the svg height minus the data value. So you basically draw the bar
  // starting from the top.
  // To have the y position calculated by the range function
  .range([ height, 0 ]);

  // Create SVG element

  var svg = d3.select("#barChart").append("svg").attr("width",
      width + margin.left + margin.right).attr("height",
      height + margin.top + margin.bottom).attr("id", "barChartPlot");

  var plot = svg.append("g").attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  plot.selectAll("rect").data(firstDatasetBarChart).enter().append("rect")
      .attr("x", function(d, i) {
        return xScale(i);
      }).attr("width", width / firstDatasetBarChart.length - barPadding)
      .attr("y", function(d) {
        return yScale(d.cantidad);
      }).attr("height", function(d) {
        return height - yScale(d.cantidad);
      })
      .attr("fill", colorChosen)
      //.attr("fill", function(d) { 
      //  console.log(d);
      //  return color(d.nivel); })
      ;

  // Add y labels to plot

  console.log("firstDatasetBarChart.length");
  //console.log(firstDatasetBarChart.length);
  console.log(firstDatasetBarChart);
  
  plot.selectAll("text")
      .data(firstDatasetBarChart)
      .enter()
      .append("text")
      .text(function(d) {
        return formatAsInteger(d3.round(d.cantidad));
      })
      .attr("text-anchor", "middle")
      // Set x position to the left edge of each bar plus half the bar
      // width
      .attr(
          "x",
          function(d, i) {
            return (i * (width / firstDatasetBarChart.length))
                + ((width / firstDatasetBarChart.length - barPadding) / 2);
          }).attr("y", function(d) {
        return yScale(d.cantidad) - 9;
      }).attr("class", "yAxis")
  /*
   * moved to CSS .attr("font-family", "sans-serif") .attr("font-size",
   * "11px") .attr("fill", "white")
   */
  ;

  // Add x labels to chart

  var xLabels = svg.append("g").attr("transform",
      "translate(" + margin.left + "," + (margin.top + height) + ")");

  xLabels
      .selectAll("text.xAxis")
      .data(firstDatasetBarChart)
      .enter()
      .append("text")
      .text(function(d) {
        
        return d.nombre;
      })
      .attr("text-anchor", "middle")
      // Set x position to the left edge of each bar plus half the bar
      // width
      .attr(
          "x",
          function(d, i) {
            return (i * (width / firstDatasetBarChart.length))
                + ((width / firstDatasetBarChart.length - barPadding) / 2);
          }).attr("y", 15).attr("class", "xAxis")
  // .attr("style", "font-size: 12; font-family: Helvetica, sans-serif")
  ;

  // Title
  svg.append("text").attr("x", (width + margin.left + margin.right) / 2)
      .attr("y", 10)
      .attr("class", "title-barchart").attr("text-anchor", "middle")
      .text("Estados de las Licitaciones");

  
  // Para la tabla
  dataTables['protestas_por_convocante'] = json2;
  transform('cantidad', 'tabla-resultado-2', 'protestas_por_convocante', 'cantidad');
  
  fechaDesde = "";
  fechaHasta = "";
  fechaFinal = " ( " + fechaDesde + " a " + fechaHasta + " ) ";
  parametrosNombreArchivo = fechaDesde.replace(/-/g, '') + "-" + fechaHasta.replace(/-/g, '');
  setDataDowload('download-datos2', 'protestas_por_convocante', parametrosNombreArchivo);
  //console.log(fechaFinal);
  
  $( "#datos2" ).empty();
  $( "#datos2" ).append(fechaFinal);
}

/* ** UPDATE CHART ** */

/* updates bar chart on request */

function updateBarChart(keys, colorChosen) {

  console.log(keys);
  console.log(colorChosen);
  var currentDatasetBarChart = datasetBarChosen(keys);

  var basics = dsBarChartBasics();

  var margin = basics.margin, width = basics.width, height = basics.height, colorBar = basics.colorBar, barPadding = basics.barPadding;

  var xScale = d3.scale.linear().domain([ 0, currentDatasetBarChart.length ])
      .range([ 0, width ]);

  var yScale = d3.scale.linear().domain(
      [ 0, d3.max(currentDatasetBarChart, function(d) {
        return d.cantidad;
      }) ]).range([ height, 0 ]);

  var svg = d3.select("#barChart svg");

  var plot = d3.select("#barChartPlot").datum(currentDatasetBarChart);

  
  console.log("currentDatasetBarChart.length");
  //console.log(currentDatasetBarChart.length);
  console.log(currentDatasetBarChart);
  /* Note that here we only have to select the elements - no more appending! */
  plot.selectAll("rect").data(currentDatasetBarChart).transition().duration(
      750).attr("x", function(d, i) {
    return xScale(i);
  }).attr("width", width / currentDatasetBarChart.length - barPadding).attr(
      "y", function(d) {
        return yScale(d.cantidad);
      }).attr("height", function(d) {
    return height - yScale(d.cantidad);
  })
  .attr("fill", colorChosen);
  //.style("fill", function(d) { return color(d.nivel); });

  plot.selectAll("text.yAxis")
      // target the text element(s) which has a yAxis class defined
      .data(currentDatasetBarChart)
      .transition()
      .duration(750)
      .attr("text-anchor", "middle")
      .attr(
          "x",
          function(d, i) {
            return (i * (width / currentDatasetBarChart.length))
                + ((width / currentDatasetBarChart.length - barPadding) / 2);
          }).attr("y", function(d) {
        return yScale(d.cantidad)  - 9;
      }).text(function(d) {
        return formatAsInteger(d3.round(d.cantidad));
      }).attr("class", "yAxis");

  svg.selectAll("text.title") // target the text element(s) which has a title
                // class defined
  .attr("x", (width + margin.left + margin.right) / 2)
  .attr("y", 10).attr(
      "class",  "title-barchart").attr("text-anchor", "middle").text(
      "Tipos de protestas por convocante");
}


function dsDetalleBarChartBasics() {

  var margin = {top: 20, right: 25, bottom: 0, left: 0},
      width = 400 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom
      ;
    
    return {
      margin : margin, 
      width : width, 
      height : height
    }     
    ;
}


function dsDetalleBarChart(d) {
  $( "#detalleChart" ).empty();
  
  var basics = dsDetalleBarChartBasics();
  
  var margin = basics.margin,
    width = basics.width,
     height = basics.height
    ;

  var svg = d3.select("#detalleChart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);
      // create group and move it so that margins are respected (space for axis and title)
      
  var plot = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .attr("id", "detalleChartPlot")
      ;


  plot.append("text")
    .text(d.value)
    .attr("id","detalleChartTitle2")
    .attr("x",width/2)
    .attr("y",height/2)
    .append("svg:tspan")
    .text(function(d) { return " licitaciones"; })
    .attr("id","detalleChartTitle2small")
    ;

  svg.append("text")
    .text(d.key)
    .attr("id","detalleChartTitle1")  
    .attr("x", margin.left + ((width + 10)/2))
    .attr("y", 10)
    ;

}

