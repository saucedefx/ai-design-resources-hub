document.addEventListener("DOMContentLoaded", function() {
    // Sample resources data
    const resources = [
        { title: "Free AI Design Tool 1", description: "A powerful tool for AI design.", url: "#" },
        { title: "Free AI Design Tool 2", description: "An intuitive AI design platform.", url: "#" },
        // Add more resources as needed
    ];

    // Function to display resources
    function displayResources() {
        const resourcesSection = document.getElementById("resources");
        resources.forEach(resource => {
            const resourceElement = document.createElement("div");
            resourceElement.innerHTML = `
                <h2>${resource.title}</h2>
                <p>${resource.description}</p>
                <a href="${resource.url}">Visit</a>
            `;
            resourcesSection.appendChild(resourceElement);
        });
    }

    // Call the function to display resources
    displayResources();
});
