// Simple array to store attendance history
let attendanceHistory = [];

function markAttendance() {
    const childName = document.getElementById('childName').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;

    // Create a new entry for the attendance history
    const entry = {
        childName: childName,
        status: attendanceStatus,
        timestamp: new Date().toLocaleString()
    };

    // Add the entry to the history
    attendanceHistory.push(entry);

    // Display the updated attendance history
    displayAttendanceHistory();
}

function displayAttendanceHistory() {
    const historyList = document.getElementById('attendanceHistory');

    // Clear previous entries
    historyList.innerHTML = '';

    // Display each entry in the history
    attendanceHistory.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.childName} - ${entry.status} (${entry.timestamp})`;
        historyList.appendChild(listItem);
    });
}
