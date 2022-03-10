
function clicked() {
   
   let site = document.getElementById('site').value;
   const st = site.split("-")


const split = document.getElementById('split').value;

const page = document.getElementById('page').value;

const imagesrc = st[0]+"-"+st[1]+"-"+split+"-"+st[3]+"-"+page+".jpg"
document.getElementById('imge').src = imagesrc
   
   
}


