window.onload = function() {
    setInterval(getTime, 1000);
};

function getTime(){
	const secondHand = document.querySelector('.secHand');
	const minuteHand = document.querySelector('.minHand');
	const hourHand = document.querySelector('.hourHand');

	const now = new Date();
   
	/** SECONDS */
  	const seconds = now.getSeconds();
	/** Get seconds degrees from date */
  	const secondsDegrees = ((seconds / 60) * 360) + 90;
  
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (secondsDegrees === 90) {
		secondHand.style.transition = 'none';
	} else if (secondsDegrees >= 91) {
		secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
	}

   	/** MINUTES */
  	const minutes = now.getMinutes();
  	/** Get minutes degrees from date */
	const minutesDegrees = ((minutes / 60) * 360) + 90;
  	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   
	/** HOURS */
  	const hours = now.getHours();
  	/** Get hours degrees from date */
  	const hoursDegrees = ((hours / 12) * 360) + 90;
  	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
