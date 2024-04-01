document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("studentForm");
    const studentList = document.getElementById("studentList");
    const submitButton = document.getElementById("submitButton");

    // Function to fetch students data from the server
    function fetchStudents() {
        fetch('/api/students')
            .then(response => response.json())
            .then(data => {
                studentList.innerHTML = '';
                data.forEach(student => {
                    const studentItem = document.createElement('div');
                    studentItem.innerHTML = `
                        <p><strong>ID:</strong> ${student.id}</p>
                        <p><strong>Name:</strong> ${student.name}</p>
                        <p><strong>Address:</strong> ${student.address}</p>
                        <p><strong>Profile Picture:</strong> ${student.profilePicture}</p>
                        <button onclick="editStudent(${student.id},'${student.name}','${student.address}','${student.profilePicture}')">Edit</button>
                        <button onclick="deleteStudent(${student.id})">Delete</button>
                    `;
                    studentList.appendChild(studentItem);
                });
            });
    }

    // Function to handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const studentId = document.getElementById("studentId").value;
        const studentName = document.getElementById("studentName").value;
        const studentAddress = document.getElementById("studentAddress").value;
        const profilePicture = document.getElementById("profilePicture").value;

        // Determine whether to create or update student
        const method = (studentId === '') ? 'POST' : 'PUT';
        const url = (studentId === '') ? '/api/students' : `/api/students/${studentId}`;

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: studentId,
                name: studentName,
                address: studentAddress,
                profilePicture: profilePicture
            }),
        })
        .then(response => {
            if (response.ok) {
                fetchStudents();
                form.reset();
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Function to handle editing student
    window.editStudent = function(id, name, address, profilePicture) {
        document.getElementById("studentId").value = id;
        document.getElementById("studentName").value = name;
        document.getElementById("studentAddress").value = address;
        document.getElementById("profilePicture").value = profilePicture;
        submitButton.textContent = "Update";
    }

    // Function to handle deleting student
    window.deleteStudent = function(id) {
        if (confirm("Are you sure you want to delete this student?")) {
            fetch(`/api/students/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    fetchStudents();
                }
            })
            .catch(error => console.error('Error:', error));
        }
    }

    // Initial fetch of students data
    fetchStudents();
});
