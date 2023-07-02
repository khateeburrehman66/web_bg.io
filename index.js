  //default  color
        let defColor='white';
        
        // count number of clicks
        let click =0;
        //text of BG Color: 
        let text=document.getElementsByClassName('background_container_p');
        text[0].innerHTML = "Background color: " + defColor;
        
        //let clicks= document.getElementsByClassName('background_container_P');
       // clicks[1].innerHTML=click;

       //second p tag value
        // text[1].innerHTML=click;
        text[1].innerHTML="Clicks counter: "+ " " + click;
        function BG() {
            // Generate random RGB values
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            
            // Create the RGB color string
            let color = `rgb(${r}, ${g}, ${b})`;
            // to display specific color value on screen
            text[0].innerHTML = "Background color: " + color;
            // Set the background color of the div body
            //document.body.style.backgroundColor = color;
            let background = document.getElementsByClassName("background_container");

       background[0].style.backgroundColor = color;
       //clicks incremenet
       click++;
        text[1].innerHTML="Clicks counter: "+ " " + click;
        }
        function RS(){
            click=0;
           let resetstyle= document.getElementsByClassName('background_container');
 resetstyle[0].style.backgroundColor=defColor;
 //default color value:
 text[0].innerHTML = "Background color: " + defColor;
//  text[1].innerHTML=click;
text[1].innerHTML="Clicks counter: "+ " " + click;
        }

function linerGD() {
  
    let r1 = Math.floor(Math.random() * 100);
    let g1 = Math.floor(Math.random() * 150);
    let b1 = Math.floor(Math.random() * 200);

    let r2 = Math.floor(Math.random() * 200);
    let g2 = Math.floor(Math.random() * 100);
    let b2 = Math.floor(Math.random() * 150);

    // Degree variable
    let deg = '120deg';
    
    // Fetch div through classname
    let grad_bg = document.getElementsByClassName('grad_background');

    let Cc = `linear-gradient(${deg}, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}), rgb(${r}, ${g}, ${b}))`;
    grad_bg[0].style.background = Cc;
    text[2].innerHTML='color====:' + Cc;
    //counting clicks
    click++;
    text[3].innerHTML="Clicks counter: "+ " " + click;
}

//=====================================for auto change bg
function linerGD1() {
  let r1 = Math.floor(Math.random() * 100);
  let g1 = Math.floor(Math.random() * 150);
  let b1 = Math.floor(Math.random() * 200);

  let r2 = Math.floor(Math.random() * 200);
  let g2 = Math.floor(Math.random() * 100);
  let b2 = Math.floor(Math.random() * 150);

  // Degree variable
  let deg = '120deg';
  
  // Fetch div through classname
  //let grad_bg = document.getElementsByClassName('grad_background');

  let Cc = `linear-gradient(${deg}, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
  grad_bg[1].style.background = Cc;
}

linerGD1();
setInterval(linerGD1, 3000);
