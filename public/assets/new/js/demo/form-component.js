
// Form-Component.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(document).on('nifty.ready', function() {


    // CHOSEN
    // =================================================================
    // Require Chosen
    // http://harvesthq.github.io/chosen/
    // =================================================================
    $('#demo-chosen-select').chosen();
    $('#demo-cs-multiselect').chosen({width:'100%'});
    $('#demo-cs-multiselectTecnico').chosen({width:'80%'});
    $('#demo-cs-multiselectvendedor').chosen({width:'80%'});


    // SELECT2 SINGLE
    // =================================================================
    // Require Select2
    // https://github.com/select2/select2
    // =================================================================
    $("#demo-select2").select2();




    // SELECT2 PLACEHOLDER
    // =================================================================
    // Require Select2
    // https://github.com/select2/select2
    // =================================================================
    $("#demo-select2-placeholder").select2({
        placeholder: "Select a state",
        allowClear: true
    });



    // SELECT2 SELECT BOXES
    // =================================================================
    // Require Select2
    // https://github.com/select2/select2
    // =================================================================
    $("#demo-select2-multiple-selects").select2();




    // BOOTSTRAP TIMEPICKER
    // =================================================================
    // Require Bootstrap Timepicker
    // http://jdewit.github.io/bootstrap-timepicker/
    // =================================================================
    $('#demo-tp-com').timepicker();



    // BOOTSTRAP TIMEPICKER - COMPONENT
    // =================================================================
    // Require Bootstrap Timepicker
    // http://jdewit.github.io/bootstrap-timepicker/
    // =================================================================
    $('#demo-tp-textinput').timepicker({
        minuteStep: 5,
        showInputs: false,
        disableFocus: true
    });


    // BOOTSTRAP DATEPICKER
    // =================================================================
    // Require Bootstrap Datepicker
    // http://eternicode.github.io/bootstrap-datepicker/
    // =================================================================
    $('#demo-dp-txtinput input').datepicker();


    // BOOTSTRAP DATEPICKER WITH AUTO CLOSE
    // =================================================================
    // Require Bootstrap Datepicker
    // http://eternicode.github.io/bootstrap-datepicker/
    // =================================================================
    $('#demo-dp-component .input-group.date').datepicker({autoclose:true});


    // BOOTSTRAP DATEPICKER WITH RANGE SELECTION
    // =================================================================
    // Require Bootstrap Datepicker
    // http://eternicode.github.io/bootstrap-datepicker/
    // =================================================================
    $('#demo-dp-range .input-daterange').datepicker({
        format: "MM dd, yyyy",
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true
    });


    // INLINE BOOTSTRAP DATEPICKER
    // =================================================================
    // Require Bootstrap Datepicker
    // http://eternicode.github.io/bootstrap-datepicker/
    // =================================================================
    $('#demo-dp-inline div').datepicker({
    format: "MM dd, yyyy",
    todayBtn: "linked",
    autoclose: true,
    todayHighlight: true
    });



    // SWITCHERY - CHECKED BY DEFAULT
    // =================================================================
    // Require Switchery
    // http://abpetkov.github.io/switchery/
    // =================================================================
    new Switchery(document.getElementById('demo-sw-checked'));
    new Switchery(document.getElementById('demo-sw-unchecked'));
    new Switchery(document.getElementById('demo-sw-clr1'));
    new Switchery(document.getElementById('demo-sw-clr2'));

   //Plantillas
    new Switchery(document.getElementById('planswinsumos'));
    new Switchery(document.getElementById('planswextras'));
    new Switchery(document.getElementById('planswmanoobra'));

    new Switchery(document.getElementById('demo-sw-clr1'), {color:'#489eed'});
    new Switchery(document.getElementById('demo-sw-clr2'), {color:'#35b9e7'});
    new Switchery(document.getElementById('demo-sw-clr3'), {color:'#44ba56'});
    new Switchery(document.getElementById('demo-sw-clr4'), {color:'#f0a238'});
    new Switchery(document.getElementById('demo-sw-clr5'), {color:'#e33a4b'});
    new Switchery(document.getElementById('demo-sw-clr6'), {color:'#2cd0a7'});
    new Switchery(document.getElementById('demo-sw-clr7'), {color:'#8669cc'});
    new Switchery(document.getElementById('demo-sw-clr8'), {color:'#ef6eb6'});


});
