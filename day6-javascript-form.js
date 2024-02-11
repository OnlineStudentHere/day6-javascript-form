


/*created by online student .ie*/



/*FORM START*/
const form_wrapper = document.querySelector('.form-wrapper')
const click_button = document.querySelector('.click-button')
const invisible = document.querySelector('.invisible')
const btn_submit_form = document.querySelector('btn-submit-form')

invisible.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 500ms ease-in-out;
`;

/*OPEN Modal*/
click_button.addEventListener("click", (e) => { 

    invisible.classList.add('display-ON');
    invisible.style.visibility = 'visible';
    invisible.style.opacity = 1;
    invisible.style.transition = 'opacity 500ms ease-in-out';
    
  });
/*OPEN Modal*/


/*CLOSE Modal*/
invisible.addEventListener("click", (e) => { 

    const tar = e.target;

    if(  tar.classList.contains('btn-submit-form') ||
     tar.classList.contains('span_X') ||
      tar.classList.contains('invisible')) {   


    invisible.classList.remove('display-ON')
    invisible.style.visibility = 'hidden';
    invisible.style.opacity = 0;

     }  
  });
  /*CLOSE Modal*/
/*FORM END*/
    


