function main(){
    
    
    
    var stuname=document.getElementById("stuname").value;
    var sturollno=document.getElementById("sturollno").value;
    var s1var=document.getElementById("s1").value;
    var m1var=document.getElementById("m1").value;
    var s2var=document.getElementById("s2").value;
    var m2var=document.getElementById("m2").value;
    var s3var=document.getElementById("s3").value;
    var m3var=document.getElementById("m3").value;
    var s4var=document.getElementById("s4").value;
    var m4var=document.getElementById("m4").value;
    
    
    document.getElementById("namehere").innerHTML=stuname;
    document.getElementById("rollnohere").innerHTML=sturollno;
    document.getElementById("s1here").innerHTML=s1var;
    document.getElementById("m1here").innerHTML=m1var;
    document.getElementById("s2here").innerHTML=s2var;
    document.getElementById("m2here").innerHTML=m2var;
    document.getElementById("s3here").innerHTML=s3var;
    document.getElementById("m3here").innerHTML=m3var;
    document.getElementById("s4here").innerHTML=s4var;
    document.getElementById("m4here").innerHTML=m4var;
    var total = (m1var*1)+(m2var*1) +(m3var*1) + (m4var*1);
    var percent= (total)/5;
    var percentage = percent + "%";
    if(percent>=80){
        var grade="A";
    }else if(percent>=60){
        var grade = "B"
    }else if(percent>=40){
        var grade = "C"
    }else{
        var grade="F"
    }
    document.getElementById("stutotal").innerHTML=total;
    document.getElementById("stupercentage").innerHTML=percentage;
    document.getElementById("stugrade").innerHTML=grade;
    document.getElementById("container").style.display="block";
}