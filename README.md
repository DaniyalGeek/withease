# withease
home automation socket


1. `npm install`
2.  port 5000 is used 
3.  socket client have id which will be added on emit


End resources and json type 
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
1. https://withease-withease.c9users.io/signup
form fields (userId,password,email)

2. https://withease-withease.c9users.io/authenticate
form fields (userId,password)
get access token apply this token in header with x-access-token and make calls

3. https://withease-withease.c9users.io/state
json data (userId,piid,state,pin,deviceTitle,pinTitle,timeStamp)

4. https://withease-withease.c9users.io/pidetail
json data (userId,deviceTitle,piId)
