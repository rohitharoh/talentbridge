
	 function initMap()
         	 {
				 var uluru = {lat: 12.881899, lng:  77.595666};
				 var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
				 var marker = new google.maps.Marker({position: uluru, map: map});
             }
     function validate(myform) 
	    {
	        var name=document.myform.name.value;  
	        var mail=document.myform.email_address.value;  
	        var message=document.myform.message.value;  
	        if (name==null || name=="" || mail==null || mail=="" || message==null || message=="")
			{  
                alert("All feilds are mandatory");  
                return false;   
            }
           
        }
	
