function insert(num){
    var myString = document.form.textview.value; // value in the input_form
    var lastChar = myString[myString.length - 1];
    if (myString.length < 30) {
     if (isNaN(lastChar) || lastChar == null || isNaN(num)) { // check if input is num
      document.form.textview.value = myString + num; // add the num or the symbol i add to the current text in the input form
     }else if(num != lastChar){ // make the num i add in the end
      document.form.textview.value = myString.replace(lastChar, num);
     }
    }
   }
   function equal(){
    var sum = document.form.textview.value;
    if (sum) {
     document.form.textview.value = eval(sum); // eval() => function make the calculation
    }
   }
   function clean(){
    document.form.textview.value = '';
   }
   function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length - 1); // delete last char
   }