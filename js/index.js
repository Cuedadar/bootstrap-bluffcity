function submitMessage(message) {
    // Want to submit forms with all variables to an email address or cloud storage
    // Maybe for now we simulate clicking on an email link with a pre-filled subject and template for name and message?

    console.log(message);
    alert("Message sent!");
}

function validateEmailOnKeyPress(email) {
    let isValid = false;
    if (email.includes("@") && email.includes(".")) {
        isValid = true;
    }

    console.log(`${email} validation complete. Email is ${isValid ? "valid" : "invalid"}`);
}

function getProjectStatus() {
    const projectTypes = ["Pending Resources", "Testing/Inspection", "Under Review", "On Time", "Ahead of Schedule", "Completed", "Not Started", "Delayed"];

    // Math.random returns a floating point in JS
    // multiply by length will give and applying floor will give us the random index we want
    let randomIndex = Math.floor(Math.random() * projectTypes.length);

    console.log(randomIndex);
    console.log(projectTypes[randomIndex]);
}

function filterTableByName(name) {
    const projectNames = ["Project Phoenix", "Bridge Repair Group", "Urban Builders Co.", "Memphis Steelworks", "River Stone Construction", "Modern Builders Inc.,", "Highway Masters", "Gold Standard Homes", "Pioneer Engineering", "Brickstone Contractors"];

    let filteredProjects = projectNames.filter((project) => {
        return project.toLowerCase().includes(name.toLowerCase());
    });

    console.log(filteredProjects)
}

// Add listener to close navbar when nav-item a tag is clicked/tapped
// I understand this code, but did not originally write it. Comments included to demonstrate understanding
// Please do not include this as part of grading for my project. I do not claim this code as my own.

// PROBLEM: On mobile devices, navbar menu does not automatically close when selecting a menu item.
// SOLUTION: Add a listener for the click event on the anchor tags that represent the menu items,
//  make sure we're on an appropriate breakpoint/viewport size and create a new bootstrap Collapse object
//  giving it the element identified as navbarContent and calling the hide method on it.
function addListenerToNavAnchors() {
    Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
        item.addEventListener("click", (event) => {
            if (window.innerWidth < 768) {
                new bootstrap.Collapse(document.getElementById("navbarContent")).hide();
            }
        });
    });
}


// Methods called on page load
addListenerToNavAnchors();

submitMessage("Welcome to Bluff City!");
validateEmailOnKeyPress("test.com")
validateEmailOnKeyPress("test@example.com")
getProjectStatus();
filterTableByName("");
filterTableByName("Memphis")
filterTableByName("CO")
