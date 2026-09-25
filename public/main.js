// Write your JavaScript code here!
    // Write your JavaScript code here! 
    var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];
    planets.reverse();
    
        // We are going to solve this by breaking the problem into three parts. 
        // Programmers like automating things, we'll populate the HTML drop down options using code, 
        // instead of having to type out all the values. 
        // Create a function that does the some math and gives us the new weight. 
        // Then create a function that responds when the user clicks on the button. 

        // 1. Populate the dropdown element with the data found in the planets array. 
        // The value of each option should be the planet's name. 
        // Use the following built-in methods: 
        // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 
    
    // connect select element
    const slct = document.getElementById("planets");
    planets.forEach((planet, index) => 
        {
            let plnt = document.createElement("option"); // planet option
            console.log(planet[0],planet[1]);
            plnt.value = planet[0];
            plnt.append(planet[0]);
            slct.appendChild(plnt);
        });

    function calculateWeight(weight, planetName) { 
        // 2. Write the code to return the correct weight 
        let grav = 0;
        for (let planet of planets) 
            {
                if (planet[0] == planetName)
                    grav = planet[1];
            }
        return weight * grav;
    } 

    // connect button
    const button = document.getElementById("calculate-button");
    // add event listener 
    button.addEventListener("click",handleClickEvent);
    // connect input field
    const input = document.getElementById("user-weight");
    // add event listener
    input.addEventListener("keydown",function(event) {
        if (event.key === "Enter")
        {
            button.click();
        }
    });
    // connect output
    const output = document.getElementById("output");

    function handleClickEvent(e) {
        // 3. Declare a variable called userWeight and assign the value of the user's weight.
        let userWeight = Number(input.value);
        // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 
        let planetName = slct.value;
        console.log(planetName);
        // 5. Declare a variable called result and assign the value of the new calculated weight. 
        let result = calculateWeight(userWeight, planetName);
        // 6. Write code to display the message shown in the screenshot. 
        let message = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
        output.textContent = message;
        //output.append(message); bug makes it so page is flooded with output use out.textContent instead

    } 

        // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

        // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
        // feel free to add classes and id's to the HTML elements as you need, 
        // import.a google font and use it for some or all of the text on your page. 


        // Bonus Challenges 
        // 8. Reverse the drop down order so that the sun is first.