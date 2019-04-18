"use strict";

jQuery(document).ready(() => {

	let counter = 0;

	jQuery('.first-arrow').on("click", ()=>{
if (counter <= 0){
    	jQuery('.suggestions ul').css({
    		'transition': 'transform 0.5s ease-in-out',
    		'transform': `translateX(${counter}px)`
    		})

    	counter += 100;

    	console.log(counter);


}
    	// jQuery('.suggestions ul').style.transition = 'transform 0.5s ease-in-out';
    	// counter++;
    	// jQuery('.suggestions ul').style.transform = 'translateX(30px)';
    });


    jQuery('.last-arrow').on("click", ()=>{

    	if (counter >= -850) {
    	jQuery('.suggestions ul').css({
    		'transition': 'transform 0.5s ease-in-out',
    		'transform': `translateX(${counter}px)`
    		})

    	counter += -100;

    	console.log(counter);

}

    	// jQuery('.suggestions ul').style.transition = 'transform 0.5s ease-in-out';
    	// counter++;
    	// jQuery('.suggestions ul').style.transform = 'translateX(30px)';
    });
});