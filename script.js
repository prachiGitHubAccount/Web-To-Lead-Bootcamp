function beforeSubmit(){
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log('input value', inputDate.value); //string-->date(en_IN);

    let StringToDate = new Date(inputDate.value).toLocaleDateString("en-In");
    outputDate.value = StringToDate;
}



 function timestamp() { var response = document.getElementById("g-recaptcha-response"); 
 if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
