function validateForm() {

    // Get the fields and store them as objects.
    var serving_size_textfield = document.getElementById('serving-size');
    var servings_container_textfield = document.getElementById('servings-container');
    var calories_textfield = document.getElementById('calories') ;
    var calories_fat_textfield = document.getElementById('calories-fat') ;
    var total_fat_textfield = document.getElementById('total-fat') ;
    var sat_fat_textfield = document.getElementById('sat-fat') ;
    var trans_fat_textfield = document.getElementById('trans-fat');
    var cholesterol_textfield = document.getElementById('cholesterol');
    var sodium_textfield = document.getElementById('sodium');
    var potassium_textfield = document.getElementById('potassium');
    var carb_textfield = document.getElementById('carbohydate');
    var fiber_textfield = document.getElementById('fiber');
    var sugars_textfield = document.getElementById('sugars');
    var protein_textfield = document.getElementById('protein');
    
    
    // Check if Contain Number only
    var check_for_a_number = true ;
    var pattern = /\d/ ; 
    
    ////////////////////////////////////////////////////////////////////
    //
    // Serving Size + Servings per Container
    //
    //////////////////////////////////////////////////////////////////////
    var serving_size_value = document.getElementById("serving-size-value") ;
    var servings_container_value = document.getElementById("servings-container-value") ;
    
    serving_size_value.innerHTML = serving_size_textfield.value ;
    servings_container_value.innerHTML = servings_container_textfield.value ;
    
    ////////////////////////////////////////////////////////////////////
    //
    // Calories 
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( calories_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        calories_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('cal_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('cal_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
       
        calories_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('cal_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('cal_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( calories_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
            
            calories_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('cal_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('cal_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
           
            calories_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('cal_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('cal_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var calories_value = document.getElementById("calories-value") ;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            calories_value.innerHTML = calories_textfield.value ;
        }
    }
    
    ////////////////////////////////////////////////////////////////////
    //
    // Calories from Fat
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( calories_fat_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        calories_fat_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('cal_fat_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('cal_fat_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        calories_fat_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('cal_fat_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('cal_fat_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( calories_fat_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            calories_fat_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('cal_fat_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('cal_fat_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            calories_fat_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('cal_fat_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('cal_fat_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var calories_fat_value = document.getElementById("calories-fat-value") ;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            calories_fat_value.innerHTML = calories_fat_textfield.value ;
        }
    }
    
    ////////////////////////////////////////////////////////////////////
    //
    // Total Fat
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( total_fat_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        total_fat_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('total_fat_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('total_fat_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        total_fat_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('total_fat_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('total_fat_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( total_fat_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            total_fat_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('total_fat_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('total_fat_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            total_fat_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('total_fat_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('total_fat_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var total_fat_value = document.getElementById("total-fat-value") ;
    var total_fat_value_percentage = document.getElementById("total-fat-value-percentage") ;
    var total_fat_dv_value = 65;
    var total_fat_dv_percentage;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            total_fat_dv_percentage = Math.round((total_fat_textfield.value / total_fat_dv_value) * 100);
            total_fat_value.innerHTML = total_fat_textfield.value ;
            total_fat_value_percentage.innerHTML = total_fat_dv_percentage;
        }
    }
    
    ////////////////////////////////////////////////////////////////////
    //
    // Saturated Fat
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( sat_fat_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        sat_fat_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('sat_fat_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('sat_fat_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        sat_fat_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('sat_fat_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('sat_fat_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( sat_fat_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            sat_fat_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('sat_fat_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('sat_fat_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            sat_fat_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('sat_fat_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('sat_fat_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var sat_fat_value = document.getElementById("sat-fat-value") ;
    var sat_fat_value_percentage = document.getElementById("sat-fat-value-percentage") ;
    var sat_fat_dv_value = 20;
    var sat_fat_dv_percentage;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            sat_fat_dv_percentage = Math.round((sat_fat_textfield.value / sat_fat_dv_value) * 100);
            sat_fat_value.innerHTML = sat_fat_textfield.value ;
            sat_fat_value_percentage.innerHTML = sat_fat_dv_percentage;
        }
    }
    
    ////////////////////////////////////////////////////////////////////
    //
    // Trans Fat
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( trans_fat_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        trans_fat_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('trans_fat_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('trans_fat_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        trans_fat_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('trans_fat_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('trans_fat_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( trans_fat_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            trans_fat_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('trans_fat_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('trans_fat_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            trans_fat_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('trans_fat_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('trans_fat_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var trans_fat_value = document.getElementById("trans-fat-value") ;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            trans_fat_value.innerHTML = trans_fat_textfield.value ;
        }
    }
    
    ///////////////////////////////////////////////////////////////////////
    //
    // Cholesterol 
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( cholesterol_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        cholesterol_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('cholesterol_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('cholesterol_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        cholesterol_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('cholesterol_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('cholesterol_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( cholesterol_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            cholesterol_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('cholesterol_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('cholesterol_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            cholesterol_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('cholesterol_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('cholesterol_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var cholesterol_value = document.getElementById("cholesterol-value") ;
    var cholesterol_value_percentage = document.getElementById("cholesterol-value-percentage") ;
    var cholesterol_dv_value = 300;
    var cholesterol_dv_percentage;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            cholesterol_dv_percentage = Math.round((cholesterol_textfield.value / cholesterol_dv_value) * 100);
            cholesterol_value.innerHTML = cholesterol_textfield.value ;
            cholesterol_value_percentage.innerHTML = cholesterol_dv_percentage;
        }
    }
    
    ///////////////////////////////////////////////////////////////////////
    //
    // Sodium
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( sodium_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        sodium_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('sodium_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('sodium_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        sodium_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('sodium_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('sodium_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( sodium_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            sodium_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('sodium_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('sodium_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            sodium_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('sodium_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('sodium_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var sodium_value = document.getElementById("sodium-value") ;
    var sodium_value_percentage = document.getElementById("sodium-value-percentage") ;
    var sodium_dv_value = 2400;
    var sodium_dv_percentage;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            sodium_dv_percentage = Math.round((sodium_textfield.value / sodium_dv_value) * 100);
            sodium_value.innerHTML = sodium_textfield.value ;
            sodium_value_percentage.innerHTML = sodium_dv_percentage;
        }
    }
    
    ///////////////////////////////////////////////////////////////////////
    //
    // Potassium
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( potassium_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        potassium_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('potassium_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('potassium_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        potassium_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('potassium_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('potassium_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( potassium_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            potassium_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('potassium_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('potassium_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            potassium_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('potassium_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('potassium_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var potassium_value = document.getElementById("potassium-value") ;
    var potassium_value_percentage = document.getElementById("potassium-value-percentage") ;
    var potassium_dv_value = 3500;
    var potassium_dv_percentage;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            potassium_dv_percentage = Math.round((potassium_textfield.value / potassium_dv_value) * 100);
            potassium_value.innerHTML = potassium_textfield.value ;
            potassium_value_percentage.innerHTML = potassium_dv_percentage;
        }
    }
    
    ///////////////////////////////////////////////////////////////////////
    //
    // Carbohydate
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( carb_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        carb_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('carb_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('carb_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        carb_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('carb_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('carb_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( carb_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            carb_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('carb_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('carb_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            carb_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('carb_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('carb_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var carb_value = document.getElementById("carb-value") ;
    var carb_value_percentage = document.getElementById("carb-value-percentage") ;
    var carb_dv_value = 300;
    var carb_dv_percentage;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            carb_dv_percentage = Math.round((carb_textfield.value / carb_dv_value) * 100);
            carb_value.innerHTML = carb_textfield.value ;
            carb_value_percentage.innerHTML = carb_dv_percentage;
        }
    }
    
    ///////////////////////////////////////////////////////////////////////
    //
    // Fiber
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( fiber_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        fiber_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('fiber_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('fiber_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        fiber_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('fiber_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('fiber_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( fiber_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            fiber_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('fiber_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('fiber_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            fiber_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('fiber_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('fiber_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var fiber_value = document.getElementById("fiber-value") ;
    var fiber_value_percentage = document.getElementById("fiber-value-percentage") ;
    var fiber_dv_value = 25;
    var fiber_dv_percentage;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            fiber_dv_percentage = Math.round((fiber_textfield.value / fiber_dv_value) * 100);
            fiber_value.innerHTML = fiber_textfield.value ;
            fiber_value_percentage.innerHTML = fiber_dv_percentage;
        }
    }
    
    ////////////////////////////////////////////////////////////////////
    //
    // Sugars
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( sugars_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        sugars_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('sugars_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('sugars_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        sugars_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('sugars_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('sugars_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( sugars_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            sugars_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('sugars_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('sugars_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            sugars_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('sugars_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('sugars_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var sugars_value = document.getElementById("sugars-value") ;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            sugars_value.innerHTML = sugars_textfield.value ;
        }
    }
    
    
    
    ///////////////////////////////////////////////////////////////////////
    //
    // Protein
    //
    //////////////////////////////////////////////////////////////////////
    
    if ( ! pattern.test ( protein_textfield.value ) ){ 
        var error_message = 'Please enter positive numbers' ; 
       
        protein_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
        document.getElementById('protein_error_message').textContent = error_message ; // set the error message contents
        document.getElementById('protein_error_message').style.visibility = 'visible' ; // make the error message visible
        check_for_a_number = false ;

    }
    else { 
        
        protein_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
        document.getElementById('protein_error_message').textContent = '' ; // blank out the error message 
        document.getElementById('protein_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
        check_for_a_number = true ;
    }
    
    // Check if Numbers < 0

    var check_positive_number = true ;
    
    if ( check_for_a_number ) {
        
        if ( protein_textfield.value < 0 ){
            var error_message = 'Please enter positive numbers' ; 
           
            protein_textfield.setAttribute('class', 'error' ) ; // set the CSS class 
            document.getElementById('protein_error_message').textContent = error_message ; // set the error message contents
            document.getElementById('protein_error_message').style.visibility = 'visible' ; // make the error message visible   
            check_positive_number = false ;
        }
        
        else { 
            
            protein_textfield.removeAttribute('class', 'error' ) ; // remove the CSS
            document.getElementById('protein_error_message').textContent = '' ; // blank out the error message 
            document.getElementById('protein_error_message').style.visibility = 'hidden' ; // hide the blank error message (not strictly needed)
            check_positive_number = true ;
        }
        
    }
    
    var protein_value = document.getElementById("protein-value") ;
    var protein_value_percentage = document.getElementById("protein-value-percentage") ;
    var protein_dv_value = 50;
    var protein_dv_percentage;
    
    if (check_for_a_number) {
        
        if (check_positive_number) {
        
            protein_dv_percentage = Math.round((protein_textfield.value / protein_dv_value) * 100);
            protein_value.innerHTML = protein_textfield.value ;
            protein_value_percentage.innerHTML = protein_dv_percentage;
        }
    }
        
}

   