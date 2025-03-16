document.addEventListener("DOMContentLoaded", function () {
    const githubUsername = "A-Vllgs"; // Replace with your GitHub username
    const projectsContainer = document.getElementById("github-projects");

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((repo) => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");

                const projectTitle = document.createElement("h3");
                projectTitle.textContent = repo.name;

                const projectDescription = document.createElement("p");
                projectDescription.textContent = repo.description || "No description provided.";

                const projectLink = document.createElement("a");
                projectLink.href = repo.html_url;
                projectLink.textContent = "View on GitHub";
                projectLink.target = "_blank";

                projectCard.appendChild(projectTitle);
                projectCard.appendChild(projectDescription);
                projectCard.appendChild(projectLink);

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch((error) => {
            console.error("Error fetching GitHub projects:", error);
        });
});