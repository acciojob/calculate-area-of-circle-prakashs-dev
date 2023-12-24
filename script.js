 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	 const circle = (rad) => {
		 return Math.PI*rad*rad;
	 }
	 const area = circle(radius).toFixed(2);
     alert(`The area of the circle with radius ${radius} is ${area}`);     
}
calculateArea();
