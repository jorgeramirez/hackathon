var graficar = function (id) {

    //morris chart
    $('#' + id).show();

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      var tax_data = [
           {"period": "2011 Q3", "licensed": 3407, "sorned": 660},
           {"period": "2011 Q2", "licensed": 3351, "sorned": 629},
           {"period": "2011 Q1", "licensed": 3269, "sorned": 618},
           {"period": "2010 Q4", "licensed": 3246, "sorned": 661},
           {"period": "2009 Q4", "licensed": 3171, "sorned": 676},
           {"period": "2008 Q4", "licensed": 3155, "sorned": 681},
           {"period": "2007 Q4", "licensed": 3226, "sorned": 620},
           {"period": "2006 Q4", "licensed": 3245, "sorned": null},
           {"period": "2005 Q4", "licensed": 3289, "sorned": null}
      ];
    


    

      Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: 'SILDAY DTM S.R.L', geekbench: 1571},
          {device: 'TECTERM', geekbench: 1255},
          {device: 'DICOPAR SRL', geekbench: 975},
          {device: 'SILVESTRI MUEBLES S.R.L', geekbench: 880},
          {device: 'QUALITY DESIGN S.R.L.', geekbench: 737 },
          {device: 'MELCOR S.A', geekbench: 336},
          {device: 'INFOGA S.R.L', geekbench: 337 },
          {device: 'ASTRI S.A.', geekbench: 240 },
          {device: 'ARQUITECTURA Y DISEÑO SA', geekbench: 155 },
          {device: 'NUÑEZ Y NUÑEZ  MUEBLES SRL', geekbench: 133 }
        ],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#ac92ec']
      });

    

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

};




