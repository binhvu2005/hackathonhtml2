document.addEventListener("DOMContentLoaded", function () {
    let projectTable = document.getElementById("projectTable");
    let projects = localStorage.getItem("projects") ? JSON.parse(localStorage.getItem("projects")) : [];

    function displayProjects() {
        projectTable.innerHTML = `<tr>
            <th>Project Name</th>
            <th>Image URL</th>
            <th>Link</th>
            <th>Tags</th>
            <th>Action</th>
        </tr>`;

        projects.forEach(function (project) {
            let row = projectTable.insertRow(-1);
            row.insertCell(0).innerText = project.projectName;
            row.insertCell(1).innerText = project.imgUrl;
            row.insertCell(2).innerText = project.link;
            row.insertCell(3).innerText = project.tags.join(", ");
            let actionCell = row.insertCell(4);

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.style.backgroundColor = "red";
            deleteButton.addEventListener("click", function () {
                deleteProject(project.id);
            });

            let updateButton = document.createElement("button");
            updateButton.innerText = "Update";
            updateButton.style.backgroundColor = "green";
            updateButton.addEventListener("click", function () {
                updateProject(project.id);
            });

            actionCell.appendChild(deleteButton);
            actionCell.appendChild(updateButton);
        });
    }

    function deleteProject(id) {
        projects = projects.filter((project) => project.id !== id);
        localStorage.setItem("projects", JSON.stringify(projects));
        displayProjects();
    }

    function updateProject(id) {
        let projectToUpdate = projects.find((project) => project.id === id);

        if (projectToUpdate) {
            projectToUpdate.projectName = prompt("nhập tên project mới");
            projectToUpdate.imgUrl = prompt("nhập image URL mới");
            projectToUpdate.link = prompt("nhập link mới");
            projectToUpdate.tags = prompt("nhập các tags mới").split(",");
            localStorage.setItem("projects", JSON.stringify(projects));

            displayProjects();
        } else {
            console.error("Không tìm thấy project với ID: " + id);
        }
    }

    document.getElementById("newProject").addEventListener("click", function (event) {
        event.preventDefault();
        let projectName = document.getElementById("project_name").value;
        let imgUrl = document.getElementById("img_url").value;
        let link = document.getElementById("link").value;
        let tags = document.getElementById("tag").value.split(",");

        var newProject = {
            id: Date.now(),
            projectName: projectName,
            imgUrl: imgUrl,
            link: link,
            tags: tags,
        };

        projects.push(newProject);

        localStorage.setItem("projects", JSON.stringify(projects));

        displayProjects();
    });

    displayProjects();
});
