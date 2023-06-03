 <script>
        // program to check leap year by var & prompt
        
        /*var year
        year=prompt("enter your year");

        if ((0==year%4)||(0==year%400)||(0==year%100)){
            document.write(year+ " "+"is a Leap year");
        }
        else{
            document.write(year+" "+"is not a leap year");
        }*/
        
       // program to check leap year by function
       var year
       function CheckLeapYear(leap){
           if((0==leap%4) ||(0==year%400)||(0==year%100)){
               document.write(leap+'is a leap year');
           }
           else{
               document.write(leap+' is not a leap year');
           }
       }

       leap=prompt(' enter your year');
       CheckLeapYear(leap);

       
       /*
       var year;
       year=prompt("Enter year here");
       if (year%4==0) {
           document.write(year+" "+" "+" "+"is a leap year");
        }
        else if(year%400==0){
           document.write(year+" "+" "+"is a leap year");

        }
        else{
            document.write(year+" "+" "+"not a leap year");
        }*/

        

    </script>
