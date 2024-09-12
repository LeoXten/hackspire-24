
web3 = new Web3(web3.currentProvider);

const contractAddress = '0xF39F6310A28715a0047D63B18EDf6cbb8fDF1a92';
const contractABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "specialization",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "workingDays",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "workingTimes",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "consultationFee",
				"type": "uint256"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symptoms",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "disease",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comments",
				"type": "string"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			}
		],
		"name": "deleteDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "admin",
				"type": "address"
			}
		],
		"name": "removeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "hospital",
				"type": "string"
			}
		],
		"name": "requestReferral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "specialization",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "workingDays",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "workingTimes",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "consultationFee",
				"type": "uint256"
			}
		],
		"name": "updateDoctorProfile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "hospitalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "doctorName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "appointmentDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "uploadMedicalRecords",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "doctorCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "specialization",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "consultationFee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDoctors",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "specialization",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "workingDays",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "workingTimes",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "consultationFee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct HealthCareRecordManagement.Doctor[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllPatients",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symptoms",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "disease",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "doctorId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "comments",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "exists",
						"type": "bool"
					}
				],
				"internalType": "struct HealthCareRecordManagement.Patient[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			}
		],
		"name": "getDoctorInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "specialization",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "workingDays",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "workingTimes",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "consultationFee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct HealthCareRecordManagement.Doctor",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDoctorsByHospital",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "specialization",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "workingDays",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "workingTimes",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "consultationFee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct HealthCareRecordManagement.Doctor[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			}
		],
		"name": "getMedicalHistory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "patientId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "hospitalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "doctorName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "appointmentDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "eprescription",
						"type": "string"
					}
				],
				"internalType": "struct HealthCareRecordManagement.MedicalRecord[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			}
		],
		"name": "getPatientInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symptoms",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "disease",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "doctorId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "comments",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "exists",
						"type": "bool"
					}
				],
				"internalType": "struct HealthCareRecordManagement.Patient",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isAdmin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "medicalRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "hospitalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "doctorName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "appointmentDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eprescription",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "patientCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symptoms",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "disease",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "doctorId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comments",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const contract = new web3.eth.Contract(contractABI, contractAddress);


// Utility function to handle errors
function handleError(error) {
    console.error("Error:", error);
    alert("An error occurred. Please check the console for details.");
}

// Function to add a doctor
function addDoctor(name, specialization, workingDays, workingTimes, consultationFee) {
    getAccounts().then(function (accounts) {
        return contract.methods.addDoctor(name, specialization, workingDays, workingTimes, consultationFee)
            .send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Doctor added successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}


// Function to add a patient
function addPatient(name, symptoms, disease, doctorId, comments) {
    getAccounts().then(function (accounts) {
        return contract.methods.addPatient(name, symptoms, disease, doctorId, comments)
            .send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Patient added successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}

function getAccounts() {
    return web3.eth.getAccounts().then(function (accounts) {
        return accounts;
    }).catch(function (error) {
        console.error('Error fetching accounts:', error);
    });
}

// Function to upload medical records
function uploadMedicalRecords(file) {
    // Simulate file upload to IPFS
    uploadToIPFS(file).then(function (ipfsHash) {
        return getAccounts().then(function (accounts) {
            return contract.methods.uploadMedicalRecords(ipfsHash).send({ from: accounts[0] });
        });
    }).then(function (receipt) {
        alert("Medical record uploaded successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}


// Function to schedule an appointment
// Function to schedule an appointment using .then()
function scheduleAppointment(patientId, doctorId, appointmentTime, appointmentDate, ipfsHash) {
    getAccounts().then(function (accounts) {
        const account = accounts[0];
        return contract.methods.scheduleAppointment(
            doctorId,
            patientId,
            appointmentTime,
            appointmentDate,
            ipfsHash
        ).send({ from: account });
    }).then(function (receipt) {
        console.log('Appointment booked:', receipt);
        alert('Appointment successfully booked!');
        document.getElementById('appointment-form').reset();
    }).catch(function (error) {
        console.error('Error booking appointment:', error);
        alert('Error booking appointment. Please try again.');
    });
}

function deleteDoctor(doctorId) {
    getAccounts().then(function (accounts) {
        return contract.methods.deleteDoctor(doctorId).send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Doctor deleted successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}

function updateDoctorProfile(name, specialization, workingDays, workingTimes, consultationFee) {
    getAccounts().then(function (accounts) {
        return contract.methods.updateDoctorProfile(name, specialization, workingDays, workingTimes, consultationFee)
            .send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Doctor profile updated successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}

// Function to request a referral
function requestReferral(patientId, hospital) {
    getAccounts().then(function (accounts) {
        return contract.methods.requestReferral(patientId, hospital).send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Referral requested successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}



function getAllPatients() {
    return contract.methods.getAllPatients().call()
        .then(function (patients) {
            console.log('Patients:', patients);
            return patients;
        })
        .catch(function (error) {
            handleError(error);
        });
}

// Function to get medical history
function getMedicalHistory(patientId) {
    return contract.methods.getMedicalHistory(patientId).call()
        .then(function (history) {
            console.log('Medical History:', history);
            return history;
        })
        .catch(function (error) {
            handleError(error);
        });
}


// Function to get doctor information
function getDoctorInfo(hospital) {
    return contract.methods.getDoctorsByHospital(hospital).call()
        .then(function (doctors) {
            console.log('Doctors in hospital:', doctors);
            return doctors;
        })
        .catch(function (error) {
            handleError(error);
        });
}
// Function to populate the patient list in the referral form
function populateReferralPatientList() {
    getAllPatients()
        .then(function (patients) {
            const referralPatientSelect = document.getElementById('referralPatient');
            // Clear existing options
            referralPatientSelect.innerHTML = '';

            // Populate dropdown with patients
            patients.forEach(function (patient) {
                const option = document.createElement('option');
                option.value = patient.id; // Assuming `patient.id` is the unique identifier
                option.textContent = `${patient.name} (ID: ${patient.id})`; // Customize the display text as needed
                referralPatientSelect.appendChild(option);
            });
        })
        .catch(function (error) {
            console.error('Error fetching patient list:', error);
        });
}

// Call the function to populate the patient list when the page loads or form is initialized

function updatePatientProfile(name, age, address, contact, email) {
    getAccounts().then(function (accounts) {
        return contract.methods.updatePatientProfile(name, age, address, contact, email)
            .send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Patient profile updated successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}
function updateDoctorProfile(name, specialization, workingDays, workingTimes, consultationFee) {
    getAccounts().then(function (accounts) {
        return contract.methods.updateDoctorProfile(name, specialization, workingDays, workingTimes, consultationFee)
            .send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Doctor profile updated successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}
function requestRecheckup(patientId, comments) {
    getAccounts().then(function (accounts) {
        return contract.methods.requestRecheckup(patientId, comments).send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Recheckup requested successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}
function notifySystem(message) {
    getAccounts().then(function (accounts) {
        return contract.methods.notifySystem(message).send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Notification sent successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}
function deleteDoctorAccount() {
    getAccounts().then(function (accounts) {
        return contract.methods.deleteDoctorAccount().send({ from: accounts[0] });
    }).then(function (receipt) {
        alert("Doctor account deleted successfully.");
    }).catch(function (error) {
        handleError(error);
    });
}
function getAllDoctors() {
    return contract.methods.getAllDoctors().call()
        .then(function (doctors) {
            console.log('Doctors:', doctors);
            return doctors;
        })
        .catch(function (error) {
            handleError(error);
        });
}

function populateDoctorDropdown() {
    getAllDoctors().then(function (doctors) {
        const doctorSelect1 = document.getElementById('patientDoctor');
        const doctorSelect2 = document.getElementById('deleteDoctor');
        doctorSelect1.innerHTML = doctors.map(doctor =>
            `<option value="${doctor.id}">${doctor.name}</option>`
        ).join('');
        doctorSelect2.innerHTML = doctors.map(doctor =>
            `<option value="${doctor.id}">${doctor.name}</option>`
        ).join('');
    }).catch(function (error) {
        handleError(error);
    });
}

window.onload = function () {
    populateDoctorDropdown();
    populateReferralPatientList();
    populateMedicalHistory(document.getElementById('patientIdInput').value);

};


// Function to populate medical history
function populateMedicalHistory(patientId) {
    if(patientId!="")
    {
        console.log(patientId);
    getMedicalHistory(parseInt(patientId,10))
        .then(function (history) {
            if(history.length>0){
            const medical = document.getElementById('medicalHistoryTable');

            medical.style.display = 'block';

            const medicalHistoryTable = document.getElementById('medicalHistoryTable');
            medicalHistoryTable.innerHTML = history.map(record => `
                <tr>
                    <td>${record.hospitalName}</td>
                    <td>${record.doctorName}</td>
                    <td>${record.appointmentDate}</td>
                    <td><a href="${record.eprescription}" target="_blank">View</a></td>
                </tr>
            `).join('');
            }
        })
        .catch(function (error) {
            handleError(error);
        });
    }
}


// Event listeners for forms

// Admin Portal
document.getElementById('doctorForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents form from reloading
    console.log("hi");
    const name = document.getElementById('doctorName').value;
    const specialization = document.getElementById('doctorSpecialization').value;
    const workingDays = document.getElementById('workingDays').value.split(',');
    const workingTimes = document.getElementById('workingTimes').value.split(',');
    const consultationFee = document.getElementById('consultationFee').value;

    if (name && specialization && workingDays.length && workingTimes.length && consultationFee) {
        addDoctor(name, specialization, workingDays, workingTimes, consultationFee)
            .then(function (result) {
                console.log('Doctor added successfully:', result);
                alert('Doctor added successfully!');
                document.getElementById('doctorForm').reset();
            })
            .catch(function (error) {
                console.error('Error adding doctor:', error);
                alert('Failed to add doctor. Please try again.');
            });
    } else {
        alert('Please fill in all fields.');
    }
});


document.getElementById('patientIdForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const patientId = parseInt(document.getElementById('patientIdInput').value,10);
    console.log(patientId);
    populateMedicalHistory(patientId);
});

document.getElementById('newPatientForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const symptoms = document.getElementById('patientSymptoms').value;
    const disease = document.getElementById('patientDisease').value;
    const doctorId = document.getElementById('patientDoctor').value;
    const comments = document.getElementById('patientComments').value;
    addPatient(name, symptoms, disease, doctorId, comments);
});
function uploadToIPFS(file) {
    const formData = new FormData();
    formData.append("file", file);
    return fetch("https://ipfs.infura.io:5001/api/v0/add", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => data.Hash) // Returning the IPFS hash
    .catch(error => {
        console.error("Error uploading to IPFS", error);
    });
}


document.getElementById('uploadRecordsForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const file = document.getElementById('recordFile').files[0];

    if (file) {
         uploadMedicalRecords(file);
    }
});

document.getElementById('referralForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const patientId = document.getElementById('referralPatient').value;
    const hospital = document.getElementById('referralHospital').value;
    requestReferral(patientId, hospital);
});

document.getElementById('deleteDoctorForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const doctorId = document.getElementById('deleteDoctor').value;
    deleteDoctor(doctorId);
});

// Doctor Dashboard
document.getElementById('bookAppointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const diseaseSymptoms = document.getElementById('diseaseSymptoms').value;
    const doctorId = document.getElementById('doctorSelect').value;
    const comments = document.getElementById('appointmentComments').value;
    scheduleAppointment(patientId, doctorId, appointmentTime);
});

document.getElementById('updateProfileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('profileName').value;
    const specialization = document.getElementById('profileSpecialization').value;
    const workingDays = document.getElementById('profileWorkingDays').value.split(',');
    const workingTimes = document.getElementById('profileWorkingTimes').value.split(',');
    const consultationFee = document.getElementById('profileFee').value;
    updateDoctorProfile(name, specialization, workingDays, workingTimes, consultationFee);
});

document.getElementById('patientHistoryForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const patientId = document.getElementById('patientId').value;
    populateMedicalHistory(patientId);
});

document.getElementById('notifySystemForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const message = document.getElementById('notifyMessage').value;
    notifySystem(message);
});

document.getElementById('deleteAccountForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const confirmText = document.getElementById('deleteAccount').value;
    if (confirmText === "DELETE") {
        deleteDoctorAccount();
    } else {
        alert("Type 'DELETE' to confirm.");
    }
});

// Patient Portal
document.getElementById('bookAppointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const diseaseSymptoms = document.getElementById('diseaseSymptoms').value;
    const doctorId = document.getElementById('doctorSelect').value;
    const comments = document.getElementById('appointmentComments').value;
    scheduleAppointment(patientId, doctorId, appointmentTime);
});

document.getElementById('updateProfileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const address = document.getElementById('patientAddress').value;
    const contact = document.getElementById('patientContact').value;
    const email = document.getElementById('patientEmail').value;
    updatePatientProfile(name, age, address, contact, email);
});

document.getElementById('recheckupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const patientId = document.getElementById('patientId').value;
    const comments = document.getElementById('recheckupComments').value;
    requestRecheckup(patientId, comments);
});

document.getElementById('referralRequestForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const hospital = document.getElementById('referralHospital').value;
    requestReferral(patientId, hospital);
});

document.getElementById('doctorInfoForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const hospital = document.getElementById('doctorHospital').value;
    const doctors =  getDoctorInfo(hospital);
    const doctorInfo = document.getElementById('doctorInfo');
    doctorInfo.innerHTML = doctors.map(doctor => `
        <p>${doctor.name} - ${doctor.specialization}</p>
    `).join('');
});
