<script type="text/javascript">

var imageIndex=1;
console.log(imageIndex);
function getPrevImage()
{

imageIndex=imageIndex-1;
document.getElementById('button2').style.visiblity='visible';
if(imageIndex<=1)
{
document.getElementById('button1').style.visiblity='hidden';
}
var imgSource="images/image"+imageIndex+".jpg"
document.getElementByID("imageGallery").src=imgSource;
}


function getNextImage()
{


imageIndex=imageIndex + 1;
document.getElementById('button1').style.visiblity='visible';
if(imageIndex>=4)
{
document.getElementById('button2').style.visiblity='hidden';
}
var imgSource="images/image"+imageIndex+".jpg"
document.getElementByID("imageGallery").src=imgSource;
}

</script>

