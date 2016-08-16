# withease
home automation socket


1. `npm install`
2.  port 5000 is used 
3.  socket client have id which will be added on emit


End resources and json type 

/users
{
"userId":"daniyal",
"password":"password",
"email":"dani@gmail.com"
}

/pidetail

{
    "userId": "daniyal",
    "piId": "pi111",
    "deviceStatus":"pi111"
   
}

/pinstate

{
            	"deviceStatusId":"pi111",
 							"deviceState":"on",
 							"pin1":"on",
 							"pin2":"off",
 							"pin3":"off",
 							"pin4":"off",
 							"pin5":"on"
   
}
