const userId = "user1"; // This should be dynamically set based on the logged-in user
let bookedRoom = null; // Track the currently booked room
let isProceedClicked = false; // Track if the proceed button has been clicked

function bookRoom(roomElement) {
    if (isProceedClicked) {
        alert("You cannot cancel or change bookings after proceeding.");
        return;
    }

    const roomNumber = roomElement.innerText; // Get the room number

    if (bookedRoom === roomNumber) {
        // If the user is clicking the previously booked room, cancel it
        bookedRoom = null;
        roomElement.classList.remove("booked"); // Remove booking
        alert(`Room ${roomNumber} booking has been cancelled!`);
    } else if (bookedRoom === null) {
        // If no room is booked, book the new room
        bookedRoom = roomNumber;
        roomElement.classList.add("booked"); // Add booked class
        alert(`Room ${roomNumber} has been booked!`);
    } else {
        // If a room is already booked
        alert("You can only book one room at a time. Please cancel your current booking before booking another.");
    }
}

function proceedBooking() {
    if (bookedRoom) {
        isProceedClicked = true; // Mark that proceed has been clicked
        const allRooms = document.querySelectorAll('.room');
        allRooms.forEach(room => room.classList.add('disabled')); // Disable all rooms
        alert(`Proceeding with booking for Room ${bookedRoom}.`);
    } else {
        alert("Please book a room before proceeding.");
    }
}
