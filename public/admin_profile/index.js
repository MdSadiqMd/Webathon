document.getElementById("markAbsenceBtn").addEventListener("click", function () {
    const courseName = document.getElementById("CourseName").value;
    const examDate = document.getElementById("ExamDate").value;
    const examType = document.getElementById("examType").value;

    const selectedStudentIDs = [];
    document.querySelectorAll('.attendence > div.selected').forEach(div => {
        const studentID = div.textContent.trim();
        selectedStudentIDs.push(studentID);
    });

    if (courseName && examDate && examType && selectedStudentIDs.length > 0) {
        const table = document.querySelector("table");
        const tbody = table.querySelector("tbody");

        selectedStudentIDs.forEach(studentID => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${studentID}</td>
                <td>${courseName}</td>
                <td>${examDate}</td>
                <td>${examType}</td>
                <td><button class="deleteBtn">Delete</button></td>
            `;
            document.getElementById("absenceTableBody").appendChild(row);
        });

        document.getElementById("CourseName").value = "";
        document.getElementById("ExamDate").value = "";
        document.getElementById("examType").value = "SEM-END";
        document.getElementById("errorMsg").textContent = "";
    } else {
        if (selectedStudentIDs.length === 0) {
            document.getElementById("errorMsg").textContent = "Please select one or more students before marking absence.";
        } else {
            document.getElementById("errorMsg").textContent = "Please fill in all fields before marking absence.";
        }
    }
});

document.getElementById("absenceTableBody").addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.closest("tr").remove();
    }
});

document.getElementById("addRequestBtn").addEventListener("click", function () {
    const requestDate = document.getElementById("requestDate").value;
    const requestRoom = document.getElementById("requestRoom").value;
    const requestType = document.getElementById("requestType").value;
    const requestTimings = document.getElementById("requestTimings").value;

    if (requestDate && requestRoom && requestType && requestTimings) {
        const table = document.querySelector(".requestTable table");
        const tbody = table.querySelector("tbody");

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${requestDate}</td>
            <td>${requestRoom}</td>
            <td>${requestType}</td>
            <td>${requestTimings}</td>
            <td>Pending</td>
        `;
        tbody.appendChild(row);

        document.getElementById("requestDate").value = "";
        document.getElementById("requestRoom").value = "";
        document.getElementById("requestType").value = "Swap";
        document.getElementById("requestTimings").value = "";
    } else {
        alert("Please fill in all fields before adding a request.");
    }
});

document.querySelectorAll('.attendence > div').forEach(div => {
    div.addEventListener("click", () => {
        div.classList.toggle("selected");
    });
});