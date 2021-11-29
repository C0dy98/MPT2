function lengthConverter(valNum) {
    document.getElementById("output").innerHTML = valNum;}


    // for feet
function lengthConverter1(valNum) {
    document.getElementById("output").innerHTML = valNum/0.032808;}
function lengthConverter2(valNum) {
    document.getElementById("output").innerHTML = valNum/3.2808;}
function lengthConverter3(valNum) {
    document.getElementById("output").innerHTML = valNum*0.33333;}


// for cm
function lengthConverter4(valNum) {
    document.getElementById("output").innerHTML = valNum*0.032808;}
function lengthConverter5(valNum) {
    document.getElementById("output").innerHTML = valNum/100;}
function lengthConverter6(valNum) {
    document.getElementById("output").innerHTML = valNum*0.010936;}


// for meters
function lengthConverter7(valNum) {
    document.getElementById("output").innerHTML = valNum*3.2808;}
function lengthConverter8(valNum) {
    document.getElementById("output").innerHTML = valNum/0.01;}
function lengthConverter9(valNum) {
    document.getElementById("output").innerHTML = valNum*1.0936;}


// for yards
function lengthConverter10(valNum) {
    document.getElementById("output").innerHTML = valNumyd*3;}
function lengthConverter11(valNum) {
    document.getElementById("output").innerHTML = valNum/0.010936;}
function lengthConverter12(valNum) {
    document.getElementById("output").innerHTML = valNum/1.0936;}





function lengthConverter0(valNum) {

	v = document.getElementById("input1").value;
	c1=document.getElementById("customSelect1").value;
	c2=document.getElementById("customSelect2").value;



	if (c1 == "0") {
			if (c2 == "0") {
				lengthConverter(v);
				
			} 
			else if (c2 == "1") {
				lengthConverter1(v);
			}
			else if (c2 == "2") {
				lengthConverter2(v);
				
			}
			else if (c2 == "3") {
				lengthConverter3(v);
			}
	}
	else if (c1 == "1") {
			if (c2 == "0") {
                lengthConverter4(v);
			} 
			else if (c2 == "1") {
                lengthConverter(v);
			}
			else if (c2 == "2") {
                lengthConverter5(v);
			}
			else if (c2 == "3") {
                lengthConverter6(v);;
			}
	}
	else if (c1 == "2") {
			if (c2 == "0") {
                lengthConverter7(v);
			} 
			else if (c2 == "1") {
                lengthConverter8(v);
			}
			else if (c2 == "2") {
                lengthConverter(v);
			}
			else if (c2 == "3") {
                lengthConverter9(v);
			}
	}
	else if (c1 == "3") {
			if (c2 == "0") {
                lengthConverter13(v);
			} 
			else if (c2 == "1") {
                lengthConverter11(v);
			}
			else if (c2 == "2") {
                lengthConverter12(v);
			}
			else if (c2 == "3") {
                lengthConverter(v);
			}
	}
}