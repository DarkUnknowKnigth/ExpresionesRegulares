//objeto problema
var Problema = function(oracion,expresion){
    this.oracion=oracion;
    this.expresion=expresion;
    $("#expresion").text(this.expresion);
    $("#problema").html(this.oracion);
};

//evaluadores globales 
///////////////funciones hoja 1/1
function p1(cadena) 
{
    resp={error:":)", r:false};
    // console.log(cadena);
    for(var i=0;i<cadena.length;i++)
    {
        if(cadena[i]=='a'|| cadena[i]=='b')
        {
            if(i<cadena.length-4)
            {
               // console.log(cadena[i]+i);
            }
            else
            {
                if(i>cadena.length-5 && cadena[cadena.length-4]=='a' && cadena[cadena.length-3]=='b' && cadena[cadena.length-2]=='b' && cadena[cadena.length-1]=='a')
                {
                    // console.log(cadena[i]+cadena[i+1]+cadena[i+2]+cadena[i+3]);
                    resp.r=true;
                    return resp;
                }
                else{
                    resp.r=false;
                    resp.error="un error en la terminacion de la cadena";
                    return resp;   
                }
            }
        }
        else
        {
            resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
            resp.r=false;
            return resp;
        }
    }
}
function p2(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    if(cadena.length>=4){
        for(var i=0;i<cadena.length;i++)
        {
            if (cadena[3]=='b') 
            {
                if(cadena[i]=='a'|| cadena[i]=='b')
                {

                }
                else
                {
                    resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                    resp.r=false;
                    return resp;
                }
            }
            else
            {
                resp.r=false;
                resp.error="el cuarto caracter no es b";
                return resp;  
            }
        }
        resp.r=true;
        return resp;
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener al menos 4 caracteres";
        return resp;  
    }
}
function p3(cadena){
    resp={error:":)", r:false};
    // console.log(cadena);
    if (cadena.length==5) 
    {
        for (let i = 0; i < cadena.length; i++) 
        {
            if(cadena[i]=='a'|| cadena[i]=='b')
            {
    
            }
            else
            {
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            } 
        } 
        resp.r=true;
        return resp;
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener solo 5 caracteres";
        return resp;  
    }
}
function p4(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    contab=0;;
    if(cadena.length>1)
    {
        if(tiene(cadena,'a'))
        {
            for (let i = 0; i < cadena.length; i++) 
            {
                if(cadena[i]=='a' || cadena[i]=='b')
                {
                    if(cadena[i]=='b')
                    {
                        contab++;
                    }
                }
                else
                {
                    resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                    resp.r=false;
                    return resp;
                }
            }
            if (contab%2!=0) 
            {
                resp.r=true;
                return resp;                
            }
            else{
                resp.r=false;
                resp.error="las b's no son impares";
                return resp;
            }
        }
        else{
            resp.r=false;
            resp.error="la cadena no tiene una a";
            return resp;
        }
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener almenos 2 caracteres";
        return resp;  
    }
}
function p5(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    if(cadena.length>1)
    {
        if(tiene(cadena,'a') && tiene(cadena,'b'))
        {
            if(numerodeveces(cadena,'a')==1)
            {
                for (let i = 0; i < cadena.length; i++) 
                {
                    if(cadena[i]=='a' || cadena[i]=='b')
                    {

                    }
                    else
                    {
                        resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                        resp.r=false;
                        return resp;
                    }
                }
                resp.r=true;
                return resp;

            }
            else
            {
                resp.r=false;
                resp.error="la cadena debe contener solo una a";
                return resp;  
            }
        }
        else
        {
            resp.r=false;
            resp.error="la cadena debe contener solo una a y varias b´s";
            return resp;  
        }
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener almenos 2 caracteres";
        return resp;  
    }
}
function p6(cadena)//pendiente
{
    resp={error:":)", r:false};
    // console.log(cadena);
    if(cadena.length>0)
    {
        if(tiene(cadena,'b'))
        {

            // console.log("DOnde pierde en a: "+pierde_secuencia(cadena,'a',0));
            if(cadena[(pierde_secuencia(cadena,'a',0)+1)]=='b' || cadena[(pierde_secuencia(cadena,'a',0))]=='b'){
                if(pierde_secuencia(cadena,'b',(pierde_secuencia(cadena,'a',0)+1))+1==cadena.length)
                {
                    // console.log(cadena);
                    resp.r=true;
                    return resp; 
                }
                else
                {
                    // console.log(cadena[(pierde_secuencia(cadena,'b',(pierde_secuencia(cadena,'a',0)))+1)]);
                    resp.error="un caracter invalido en la posicion: "+((pierde_secuencia(cadena,'b',(pierde_secuencia(cadena,'a',0))))+2)+" caracter: "+cadena[(pierde_secuencia(cadena,'b',(pierde_secuencia(cadena,'a',0))))+1];
                    resp.r=false;
                    return resp;    
                }
            }
            else
            {
                resp.r=false;
                resp.error="mal";
                return resp;  
            }
        }
        else
        {
            resp.r=false;
            resp.error="la cadena debe contener almenos una b";
            return resp;  
        }
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener almenos 1 caracter";
        return resp;  
    }
}
function p7(cadena){
    resp={error:":)", r:false};
    // console.log(cadena);
    if ((tiene(cadena,'a') || tiene(cadena,'e') || tiene(cadena,'i') || tiene(cadena,'o') || tiene(cadena,'u')) && cadena.length>0) {
        for (let i = 0; i < cadena.length; i++) {
            if(cadena[i]=='a' || cadena[i]=='e' || cadena[i]=='i' || cadena[i]=='o' || cadena[i]=='u')
            {
                //bientos
            }  
            else{
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            }          
        }
        resp.r=true;
        return resp
        
    }
    else{
        resp.r=false;
        resp.error="la cadena debe contener almenos 1 caracter y debe se a, e, i, o o u";
        return resp;  
    }
}
function p8(cadena,letraini){
    resp={error:":)", r:false};
    if(cadena[0]==letraini && cadena[cadena.length-1]==letraini)
    {
        if(pierde_secuencia(cadena,'b',1)==cadena.length-2)
        {
            resp.r=true;
            return resp;
        }
        else
        {
            resp.error="un caracter invalido en la posicion: "+(pierde_secuencia(cadena,'b',1)+1)+" caracter: "+cadena[pierde_secuencia(cadena,'b',1)+1];
            resp.r=false;
            return resp;
        }
       
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe comenzar y terminar con "+letraini;
        return resp; 
    }
}
function p9(cadena) 
{ 
    resp={error:":)", r:false};
    if(cadena=="")
    {
        resp.r=true;
        return resp;
    }
    else
    {
        if(tiene(cadena,'a') || tiene(cadena,'b'))
        {
            if(pierde_secuencia(cadena,'a',0)==cadena.length-1 || pierde_secuencia(cadena,'b',0)==cadena.length-1)
            {
                resp.r=true;
                return resp;
            }
            else
            {
                resp.error="un caracter invalido";
                resp.r=false;
                return resp;   
            }
        }
        else
        {
            resp.error="la cadena debe contener a o b";
            resp.r=false;
            return resp;
        }      
    }
    
}
function p10(cadena)
{
    resp={error:":)", r:false};
    if(hay(cadena,"bab"))
    {
        for (let i = 0; i < cadena.length; i++) 
        {
            if(cadena[i]=='a' || cadena[i]=='b')
            {

            }
            else
            { 
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            }                  
        }
        resp.r=true;
        return resp;
    }
    else
    {
        resp.error="la cadena debe contener bab";
        resp.r=false;
        return resp;
    }
    
}
//////////////////funciones hoja 1/2
function p1_1(cadena)
{
    resp={error:":)", r:false};
    if(cadena[0]=='a' && cadena[1]=='b' && cadena[2]=='b' && cadena[3]=='a')
    {
        for (let i = 0; i < cadena.length; i++) 
        {
            if(cadena[i]=='a'|| cadena[i]=='b')
            {
            }
            else
            {
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            }  
        }
        resp.r=true;
        return resp;
    }
    else
    {
        resp.error="la cadena iniciar con abba";
        resp.r=false;
        return resp;
    }

}
function p1_2(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    if(cadena.length>=5){
        for(var i=0;i<cadena.length;i++)
        {
            if (cadena[4]=='b') 
            {
                if(cadena[i]=='a'|| cadena[i]=='b')
                {

                }
                else
                {
                    resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                    resp.r=false;
                    return resp;
                }
            }
            else
            {
                resp.r=false;
                resp.error="el quinto caracter no es b";
                return resp;  
            }
        }
        resp.r=true;
        return resp;
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener al menos 5 caracteres";
        return resp;  
    }
}
function p1_3(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    if (cadena.length>=5) 
    {
        for (let i = 0; i < cadena.length; i++) 
        {
            if(cadena[i]=='a'|| cadena[i]=='b')
            {
    
            }
            else
            {
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            } 
        } 
        resp.r=true;
        return resp;
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener minimo 5 caracteres";
        return resp;  
    }
}
function p1_4(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    if(cadena.length>0)
    {
        if(tiene(cadena,'b'))
        {

            // console.log("DOnde pierde en a: "+pierde_secuencia(cadena,'a',0));
            if(cadena[(pierde_secuencia(cadena,'a',0)+1)]=='b'){
                if(pierde_secuencia(cadena,'b',(pierde_secuencia(cadena,'a',0)+1))+1==cadena.length )
                {
                    if(numerodeveces(cadena,'b')%2==0)
                    {
                        // console.log(cadena);
                        resp.r=true;
                        return resp;
                    } 
                    else{
                        resp.error="las b´s no son pares";
                        resp.r=false;
                        return resp;
                    }
                }
                else
                {
                    // console.log(cadena[(pierde_secuencia(cadena,'b',(pierde_secuencia(cadena,'a',0)))+1)]);
                    resp.error="un caracter invalido en la posicion: "+((pierde_secuencia(cadena,'b',(pierde_secuencia(cadena,'a',0))))+1)+" caracter: "+cadena[(pierde_secuencia(cadena,'b',(pierde_secuencia(cadena,'a',0))))+1];
                    resp.r=false;
                    return resp;    
                }
            }
            else
            {
                resp.r=false;
                resp.error="mal";
                return resp;  
            }
        }
        else
        {
            resp.r=false;
            resp.error="la cadena debe contener almenos una b";
            return resp;  
        }
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener almenos 1 caracter";
        return resp;  
    }
}
function p1_5(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    if(cadena.length>1)
    {
        if(tiene(cadena,'a') && tiene(cadena,'c'))
        {
            if(numerodeveces(cadena,'c')==1)
            {
                for (let i = 0; i < cadena.length; i++) 
                {
                    if(cadena[i]=='a' || cadena[i]=='c')
                    {

                    }
                    else
                    {
                        resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                        resp.r=false;
                        return resp;
                    }
                }
                resp.r=true;
                return resp;

            }
            else
            {
                resp.r=false;
                resp.error="la cadena debe contener solo una c";
                return resp;  
            }
        }
        else
        {
            resp.r=false;
            resp.error="la cadena debe contener solo una c y varias a´s";
            return resp;  
        }
    }
    else
    {
        resp.r=false;
        resp.error="la cadena debe contener almenos 2 caracteres";
        return resp;  
    }   
}
function p1_7(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    if ((tiene(cadena,'1')|| tiene(cadena,'0') || tiene(cadena,'2') || tiene(cadena,'3') || tiene(cadena,'4')  || tiene(cadena,'5')|| tiene(cadena,'6')|| tiene(cadena,'7')|| tiene(cadena,'8')|| tiene(cadena,'9')) && cadena.length>0) {
        for (let i = 0; i < cadena.length; i++) {
            if(cadena[i]=='1' || cadena[i]=='2' || cadena[i]=='3' || cadena[i]=='4' || cadena[i]=='5' || cadena[i]=='6' || cadena[i]=='7' || cadena[i]=='8' || cadena[i]=='9' || cadena[i]=='0')
            {
                //bientos
            }  
            else{
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            }          
        }
        resp.r=true;
        return resp
        
    }
    else{
        resp.r=false;
        resp.error="la cadena debe contener almenos 1 caracter y debe se 1,2,3,4,5,6,7,8,9 ó 0";
        return resp;  
    }
}
//////////////////funciones hoja 2/1
function p2_1(cadena)
{
    resp={error:":)", r:false};
    // console.log(cadena);
    for(var i=0;i<cadena.length;i++)
    {
        if(cadena[i]=='a'|| cadena[i]=='b')
        {
            if(i<cadena.length-2)
            {
               // console.log(cadena[i]+i);
            }
            else
            {
                if(i>cadena.length-3 && cadena[cadena.length-2]=='a' && cadena[cadena.length-1]=='a')
                {
                    // console.log(cadena[i]+cadena[i+1]);
                    resp.r=true;
                    return resp;
                }
                else{
                    resp.r=false;
                    resp.error="un error en la terminacion de la cadena";
                    return resp;   
                }
            }
        }
        else
        {
            resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
            resp.r=false;
            return resp;
        }
    }
}
function p2_2(cadena)
{
    resp={error:":)", r:false};
    if(tiene(cadena,'a') && tiene(cadena,'b'))
    {
        for(let i=1; i<cadena.length-1;i++)
        {
            if(cadena[i]!= cadena[i-1] && cadena[i]!=cadena[i+1]  && cadena[i-1]==cadena[i+1])
            {}
            else
            {
                resp.error="un caracter invalido en la posicion: "+(i+2)+" caracter: "+cadena[i+1];
                resp.r=false;
                return resp;
            }
        }
        resp.r=true;
        return resp;
    }   
    else
    {
        resp.error="no hay a's o b's";
        resp.r=false;
        return resp;
    } 
}
function p2_3(cadena)
{
    resp={error:":)", r:false};
    if(tiene(cadena,'a') && tiene(cadena,'b') && tiene(cadena,'c'))
    {
        if(numerodeveces(cadena,'c')==1)
        {
           
            if(numerodeveces(cadena,'a')%2!=0 && numerodeveces(cadena,'b')%2!=0)
            {
                for (let i = 0; i < cadena.length; i++) 
                {
                    if(cadena[i]=='a' || cadena[i]=='b' || cadena[i]=='c')
                    {
                    }
                    else
                    {
                        resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                        resp.r=false;
                        return resp;
                    }
                }
                resp.r=true;
                return resp;
            }
            else
            {
                resp.error="las a's o b's no son impares";
                resp.r=false;
                return resp;
            }      
        }
        else
        {
            resp.error="no solo una c";
            resp.r=false;
            return resp;
        }
    }
    else
    {
        resp.error="no hay a's, b's y una c";
        resp.r=false;
        return resp;
    }
}
//////////////////funciones hoja 2/2
function p_23(cadena)
{
    resp={error:":)", r:false};
    if(cadena[cadena.length-2]=='b' && cadena.length>1)
    {
        for (let i = 0; i < cadena.length; i++) 
        {
            if (cadena[i]=='a' || cadena[i]=='b') 
            {
                
            }
            else
            {
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            }   
        }
        resp.r=true;
        return resp;
    }
    else{
        resp.error="no hay una b en la penultima posicion";
        resp.r=false;
        return resp;
    }
}
function p_24(cadena) 
{ 
    resp={r:false,error:":)"};
    
    if (cadena.length%2==0 && cadena.length>=2) 
    {
        for (let i = 0; i <cadena.length; i++) 
        {
            if(cadena[i]=='a' || cadena[i]=='b')
            {
            }
        
            else
            {
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            }
        }
        resp.r=true;
        return resp;
    }
    else
    {
        resp.error="la cadena no es par";
        resp.r=false;
        return resp;
    }
}
function p_25(cadena)
{
    resp={error:":)", r:false};
    if(hay(cadena,"aba"))
    {
        for (let i = 0; i < cadena.length; i++) 
        {
            if(cadena[i]=='a' || cadena[i]=='b')
            {

            }
            else
            { 
                resp.error="un caracter invalido en la posicion: "+(i+1)+" caracter: "+cadena[i];
                resp.r=false;
                return resp;
            }                  
        }
        resp.r=true;
        return resp;
    }
    else
    {
        resp.error="la cadena debe contener aba";
        resp.r=false;
        return resp;
    }
}
   

//funciones de apoyo

function hay(cadena,subcadena)
{
    for (let i = 0; i < cadena.length-2; i++) {
        if(cadena[i]+cadena[i+1]+cadena[i+2]==subcadena)
        {
            return true;
        }
    }
}
function pierde_secuencia(cadena,letra,posicion) 
{
    let pos=0;
    for (let i = posicion; i < cadena.length; i++) {
        if(cadena[i]==letra){
            // console.log(cadena[i]);
            pos=i;
        }
        else
        {
            //retorna la posicion donde ya no es igual
            return pos;
        }
        
    }
    //retorna el final
    return pos;
}
function tiene(cadena, caracter){
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i]==caracter)
        {
            //te dice si tiene la letra o no
            return true;
        }
    }
    return false;
}
function numerodeveces(cadena, caracter){
    let apariciones=0;
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i]==caracter){
            apariciones++;
        }
    }
    //te dice cuantas veces aparecio la letra
    return apariciones;
}
//main 
$(document).ready(function(){
    $("#hojas").change(()=>{
        // console.log("entro");
        var index= $("#hojas option:selected").val();
        // console.log(index);
        switch(index){
            case '1':
                $("#opciones").css("display","block");
                $("#opciones1").css("display","none");
                $("#opciones2").css("display","none");
                $("#opciones3").css("display","none");
                break;
            case '2':
                $("#opciones").css("display","none");
                $("#opciones1").css("display","block");
                $("#opciones2").css("display","none");
                $("#opciones3").css("display","none");
                break;
            case '3':
                $("#opciones").css("display","none");
                $("#opciones1").css("display","none");
                $("#opciones2").css("display","block");
                $("#opciones3").css("display","none");
                break;
            case '4':
                $("#opciones").css("display","none");
                $("#opciones1").css("display","none");
                $("#opciones2").css("display","none");
                $("#opciones3").css("display","block");
                break;
            default:
                alert("Porfavor seleccione una hoja");
            break;
        } 
    });
    //cuando cambia la hoja
    //hoja 1
    $("#opciones").change(()=>{
        // console.log("entro");
        var index= $("#opciones option:selected").val();
        // console.log(index);
        switch(index){
            case '1':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que termine con <b>abba</b>","(a|b)+(abba)");
                break;
            case '2':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que el cuarto caracter sea <b>b</b>","(a|b)(a|b)(a|b)b(a|b)*");
                break;
            case '3':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que el numero total de caracteres sea <b>5</b>","(a|b)(a|b)(a|b)(a|b)(a|b)");
                break;
            case '4':
                var v1= new Problema("una o mas <b>a's</b> y un numero <b>impar</b> de <b>b's</b>","a+b(bb)*");
                break;
            case '5':
                var v1= new Problema("Cualquier secuencia de b's tal que <b>solo haya una a</b> en cualquier posicion","b*(ab|ba)b*");
                break; 
            case '6':
                var v1= new Problema("secuencia de cero o mas a's seguida de <b>una o mas b's</b>","a*b+");
                break;
            case '7':
                var v1= new Problema("Evaluar la expresion regular","(a//e/i/o/u)+");
                break;
            case '8':
                var v1= new Problema("Evaluar la expresion regular","Ab*A");
                break;
            case '9':
                var v1= new Problema("Evaluar la expresion regular","(a*/b*)");
                break;
            case '10':
                var v1= new Problema("Evaluar la expresion regular"," (a/b)*bab(a/b)*");
                break;
            default:
                alert("Porfavor seleccione un problema");
            break;
        } 
    });
    //hoja 2
    $("#opciones1").change(()=>{
        var index= $("#opciones1 option:selected").val();
        // console.log(index);
        switch(index)
        {
            case '1':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que empiece con <b>abba</b>","(abba)(a|b)+");
                break;
            case '2':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que el quinto caracter sea <b>b</b>","(a|b)(a|b)(a|b)(a|b)b(a|b)*");
                break;
            case '3':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que minimo haya <b>5</b> caracteres","(a|b)(a|b)(a|b)(a|b)(a|b)(a|b)*");
                break;
            case '4':
                var v1= new Problema("cero o mas <b>a's</b> y un numero <b>par</b> de <b>b's</b>","a*(bb)+");
                break;
            case '5':
                var v1= new Problema("Cualquier secuencia de a's tal que <b>solo haya una c</b> en cualquier posicion","a*(ac|ca)a*");
                break; 
            case '6':
                var v1= new Problema("secuencia de cero o mas a's seguida de <b>una o mas b's</b>","a*b+");
                break;
            case '7':
                var v1= new Problema("Evaluar la expresion regular","(1/2/3/4/5/6/7/8/9/0/1)+");
                break;
            case '8':
                var v1= new Problema("Evaluar la expresion regular","ab*a");
                break;
            case '9':
                var v1= new Problema("Evaluar la expresion regular","(a*/b*)");
                break;
            case '10':
                var v1= new Problema("Evaluar la expresion regular"," (a/b)*bab(a/b)*");
                break;
            default:
                alert("Porfavor seleccione un problema");
            break;
        }
    }); 
    //hoja 3
    $("#opciones2").change(()=>{
        // console.log("entro");
        var index= $("#opciones2 option:selected").val();
        // console.log(index);
        switch(index){
            case '1':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que termine con <b>aa</b>","(a|b)+(aa)");
                break;
            case '2':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que no haya dos <b>a´s</b> o dos <b>b´s</b>","(ab)+(a/λ)/(ba)+(b/λ)");
                break;
            case '3':
                var v1= new Problema("un numero impar de <b>a's</b> una <b>c</b> y un numero impar de <b>b's</b> ","a(aa)*cb(bb)*");
                break;
            default:
                alert("Porfavor seleccione un problema");
            break;
        } 
    });
    $("#opciones3").change(()=>{
        // console.log("entro");
        var index= $("#opciones3 option:selected").val();
        // console.log(index);
        switch(index){
            case '1':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que termine con <b>aa</b>","(a|b)+(aa)");
                break;
            case '2':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que no haya dos <b>a´s</b> o dos <b>b´s</b>","(ab)+(a/λ)/(ba)+(b/λ)");
                break;
            case '3':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que el penultimo caracter sea <b>b</b>","(a/b)*b(a/b)+");
                break;
            case '4':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que el numero total de caracteres <b>sea par</b>","(aa|bb|ab|ba)+");
                break;
            case '5':
                var v1= new Problema("Cualquier secuencia de a's o de b's siempre que incluya la subcadena aba","(a/b)*aba(a/b)*");
                break;
            default:
                alert("Porfavor seleccione un problema");
            break;
        } 
    });
    //cuando de doy en go
    // $("#boton").click(()=>{
    //     m();
        
    // });
    //version beta cuando escribo
    $("#texto").keyup(()=>{
        m();
    });
});
function m() {
    switch($("#hojas option:selected").val()){
        case '1':
        ///problemas hoja 1/1
            switch($("#opciones option:selected").val())
            {
                case '1':
                    resp=p1($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '2':
                    resp=p2($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '3':
                    resp=p3($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '4':
                    resp=p4($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '5':
                    resp=p5($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '6':
                    resp=p6($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '7':
                    resp=p7($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '8':
                    resp=p8($("#texto").val(),'A');
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '9':
                    resp=p9($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '10':
                    resp=p10($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                default:
                    alert("no seleccionó un problema");
                break;
            }
        break;
        case '2':
        /////problemas hoja 1/2
            switch($("#opciones1 option:selected").val())
            {
                case '1':
                    resp=p1_1($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '2':
                    resp=p1_2($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '3':
                    resp=p1_3($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '4':
                    resp=p1_4($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '5':
                    resp=p1_5($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '6':
                    resp=p6($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '7':
                    resp=p1_7($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '8':
                    resp=p8($("#texto").val(),'a');
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '9':
                    resp=p9($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '10':
                    resp=p10($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break; 
                default:
                    alert("no seleccionó un problema");
                break;
            }
        break;
        case '3':
        //problemas hoja 2/1
            switch($("#opciones2 option:selected").val())
            {
                case '1':
                    resp=p2_1($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '2':
                    resp=p2_2($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '3':
                    resp=p2_3($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                default:
                    alert("no seleccionó un problema");
                break;
            }
        break;
        case '4':
        //problemas hoja 2/2
            switch($("#opciones3 option:selected").val())
            {
                case '1':
                    resp=p2_1($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '2':
                    resp=p2_2($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '3':
                    resp=p_23($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '4':
                    resp=p_24($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                case '5':
                    resp=p_25($("#texto").val());
                    // console.log(resp);
                    if(resp.r){
                        $("#respuesta").text("cadena valida");
                        $("#evaluacion").addClass("bg-success");
                        $("#evaluacion").removeClass("bg-danger");
                    }
                    else{
                        $("#respuesta").text("cadena invalida: "+resp.error);
                        $("#evaluacion").addClass("bg-danger");
                    }
                break;
                default:
                    alert("no seleccionó un problema");
                break;
            }
        break;
        default:
        alert("seleccione una hoja");
        break;

    }      
  }