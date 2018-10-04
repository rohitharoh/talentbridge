
// alert('hi');
var imageIndex=1;
// console.log(imageIndex);
function getPrevImage()
{

	imageIndex=imageIndex-1;
	document.getElementById('button2').style.visibility='visible';
	if(imageIndex<=1)
	{
		document.getElementById('button1').style.visibility='hidden';
	}
	var imgSource="images/image"+imageIndex+".jpg"
	document.getElementById("imageGallery").src=imgSource;
}


function getNextImage()
{

	imageIndex=imageIndex+1;
	document.getElementById('button1').style.visibility='visible';
	if(imageIndex>=4)
	{
		document.getElementById('button2').style.visibility='hidden';
	}
	var imgSource="images/image"+imageIndex+".jpg"
	document.getElementById("imageGallery").src=imgSource;
}


