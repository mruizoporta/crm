// Morris-JS.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -



$(document).on('nifty.ready', function () {

   
    // MORRIS BAR CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    Morris.Bar({
        element: 'demo-morris-bar',
        data: [
            { y: '1', a: 100, b: 90 },
            { y: '2', a: 75,  b: 65 },
            { y: '3', a: 20,  b: 15 },
            { y: '5', a: 50,  b: 40 },
            { y: '6', a: 75,  b: 95 },
            { y: '7', a: 15,  b: 65 },
            { y: '8', a: 70,  b: 100 },
            { y: '9', a: 100, b: 70 },
            { y: '10', a: 50, b: 70 },
            { y: '11', a: 20, b: 10 },
            { y: '12', a: 40, b: 90 },
            { y: '13', a: 70, b: 30 },
            { y: '14', a: 50, b: 50 },
            { y: '15', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        gridEnabled: true,
        gridLineColor: 'rgba(0,0,0,.1)',
        gridTextColor: '#8f9ea6',
        gridTextSize: '11px',
        barColors: ['#1abc9c', '#d8e8e5'],
        resize:true,
        hideHover: 'auto'
    });


    // MORRIS DONUT CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    Morris.Donut({
        element: 'demo-morris-donut',
        data: [
            {label: 'Download Sales', value: 12},
            {label: 'In-Store Sales', value: 30},
            {label: 'Mail-Order Sales', value: 20}
        ],
        colors: [
            '#ec407a',
            '#03a9f4',
            '#d8dfe2'
        ],
        resize:true
    });
});
