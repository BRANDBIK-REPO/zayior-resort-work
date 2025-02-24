 function submitForm() {
        // Get form values
        var adults = document.getElementById('field-2').value;
        var children = document.getElementById('field-3').value;
        var rooms = document.getElementById('Rooms').value;
        
        // Validate the form (you can add more checks here if needed)
        if (!adults || !children || !rooms) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        // WhatsApp message format
        var message = `Booking Details: \nAdults: ${adults} \nChildren: ${children} \nRooms: ${rooms}`;

        // WhatsApp URL format (replace 'YOUR_PHONE_NUMBER' with your WhatsApp number)
        var whatsappURL = `https://api.whatsapp.com/send?phone=+918848825454&text=${encodeURIComponent(message)}`;

        // Redirect to WhatsApp
        window.open(whatsappURL, "_blank");
    }