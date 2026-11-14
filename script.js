const urlParams = new URLSearchParams(window.location.search);
const selectedRoom = urlParams.get("room");
if (selectedRoom) {
    document.getElementById("roomType").value = selectedRoom;
}
const bookBtn = document.getElementById("bookBtn");
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
displayBookings();
bookBtn.addEventListener("click", function () {
    const guestName =document.getElementById("guestName").value;
    const email =document.getElementById("email").value;
    const roomType =document.getElementById("roomType").value;
    const checkin =document.getElementById("checkin").value;
    const checkout =document.getElementById("checkout").value;
    const guests =document.getElementById("guests").value;
    if (
        guestName === "" ||
        email === "" ||
        roomType === "" ||
        checkin === "" ||
        checkout === "" ||
        guests === ""
    ) {
        alert("Please fill all fields");
        return;
    }
    let roomName;
    if (roomType === "deluxe") {
        roomName = "Deluxe Room";
    }
    else if (roomType === "suite") {
        roomName = "Suite Room";
    }
    else if (roomType === "family") {
        roomName = "Family Room";
    }
    const booking = {
        guestName: guestName,
        email: email,
        roomName: roomName,
        checkin: checkin,
        checkout: checkout,
        guests: guests
    };
    bookings.push(booking);
    localStorage.setItem("bookings",JSON.stringify(bookings));
    displayBookings();
    alert("Booking Successful!");
    document.getElementById("bookingForm").reset();
});
function displayBookings() {
    const tableBody =document.getElementById("bookingTableBody");
    tableBody.innerHTML = "";
    bookings.forEach(function (booking, index) {
        const newRow =document.createElement("tr");
        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${booking.guestName}</td>
            <td>${booking.email}</td>
            <td>${booking.roomName}</td>
            <td>${booking.checkin}</td>
            <td>${booking.checkout}</td>
            <td>${booking.guests}</td>
        `;
        tableBody.appendChild(newRow);
    });
}