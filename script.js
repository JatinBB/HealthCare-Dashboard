document.addEventListener('DOMContentLoaded', function() {
    const genderSelect = document.querySelector('#gender');
    const otherGenderInput = document.querySelector('#other_gender');
    const medicalHistorySelect = document.querySelector('#medical_history');
    const medicalHistoryDetailsInput = document.querySelector('#medical_history_details');

    
    genderSelect.addEventListener('change', function() {
        otherGenderInput.disabled = genderSelect.value !== 'other';
        if (genderSelect.value !== 'other') {
            otherGenderInput.value = '';
        }
    });

    
    medicalHistorySelect.addEventListener('change', function() {
        medicalHistoryDetailsInput.disabled = medicalHistorySelect.value !== 'have';
        if (medicalHistorySelect.value !== 'have') {
            medicalHistoryDetailsInput.value = '';
        }
    });
});
document.getElementById('aadhaar').addEventListener('input', function (e) {
    const aadhaarInput = e.target;
    const aadhaarValue = aadhaarInput.value;

    if (aadhaarValue.length !== 12 || isNaN(aadhaarValue)) {
        aadhaarInput.setCustomValidity('Please enter a valid 12-digit Aadhaar number.');
    } else {
        aadhaarInput.setCustomValidity('');
    }
});
document.getElementById('phone').addEventListener('input', function (e) {
    var value = e.target.value;
    var valid = /^\d{0,10}$/.test(value);
    if (!valid) {
        // If the input does not match the pattern, trim the last character.
        e.target.value = value.slice(0, -1);
    }
});
document.getElementById('send-otp').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phone-number').value;
    fetch('/send-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('OTP sent successfully!');
        } else {
            alert('Failed to send OTP.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send OTP.');
    });
});