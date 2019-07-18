//
function max(x:number,y:number,z:number):number 
{
    var max:number;
 
     if(x>=y){
 
         if(x>=z){

            max=x;
            
            console.log("Maximum number :"+x);

         }
         else {

            max=y;
            console.log("Maximum number :"+z);
         }

     }
     else{

           if(y>=z){

            max=y;
            console.log("Maximum number :"+y);

           }else
           {
               max=z;
            console.log("Maximum number :"+z);
           }
     }
    
return max;

}

var maximum :number;
 maximum=max(10,11,32);
