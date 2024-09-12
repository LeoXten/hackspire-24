// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthCareRecordManagement {

    struct Doctor {
        uint id;
        string name;
        string specialization;
        string[] workingDays;
        string[] workingTimes;
        uint consultationFee;
        bool isActive;
    }

    struct Patient {
        uint id;
        string name;
        string symptoms;
        string disease;
        uint doctorId;
        string comments;
        bool exists;
    }

    struct MedicalRecord {
        uint patientId;
        string hospitalName;
        string doctorName;
        string appointmentDate;
        string eprescription; // IPFS hash or URL
    }

    mapping(uint => Doctor) public doctors;
    mapping(uint => Patient) public patients;
    MedicalRecord[] public medicalRecords;
    mapping(address => bool) public isAdmin;

    uint public doctorCount = 0;
    uint public patientCount = 0;

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Not an admin");
        _;
    }

    constructor() {
        isAdmin[msg.sender] = true; // Contract deployer is an admin
    }

    // Admin functions

    function addDoctor(
        string memory name,
        string memory specialization,
        string[] memory workingDays,
        string[] memory workingTimes,
        uint consultationFee
    ) public onlyAdmin {
        doctorCount++;
        doctors[doctorCount] = Doctor(
            doctorCount,
            name,
            specialization,
            workingDays,
            workingTimes,
            consultationFee,
            true
        );
    }

    function addPatient(
        string memory name,
        string memory symptoms,
        string memory disease,
        uint doctorId,
        string memory comments
    ) public onlyAdmin {
        require(doctors[doctorId].isActive, "Doctor does not exist");
        patientCount++;
        patients[patientCount] = Patient(
            patientCount,
            name,
            symptoms,
            disease,
            doctorId,
            comments,
            true
        );
    }

function uploadMedicalRecords(
    uint patientId,
    string memory hospitalName,
    string memory doctorName,
    string memory appointmentDate,
    string memory ipfsHash
) public onlyAdmin {
    require(bytes(ipfsHash).length > 0, "IPFS hash required");
    require(patients[patientId].doctorId != 0, "Patient does not exist");

    MedicalRecord memory newRecord = MedicalRecord(
        patientId,
        hospitalName,
        doctorName,
        appointmentDate,
        ipfsHash
    );
    medicalRecords.push(newRecord);
}

    function requestReferral(uint patientId, string memory hospital) public onlyAdmin {
        // This function can be used to process referrals
        // Implementation depends on the referral logic
    }

    function deleteDoctor(uint doctorId) public onlyAdmin {
        doctors[doctorId].isActive = false;
    }

    // Doctor functions

    function updateDoctorProfile(
        uint doctorId,
        string memory name,
        string memory specialization,
        string[] memory workingDays,
        string[] memory workingTimes,
        uint consultationFee
    ) public onlyAdmin {
        require(doctors[doctorId].isActive, "Doctor does not exist");
        doctors[doctorId].name = name;
        doctors[doctorId].specialization = specialization;
        doctors[doctorId].workingDays = workingDays;
        doctors[doctorId].workingTimes = workingTimes;
        doctors[doctorId].consultationFee = consultationFee;
    }

    function getDoctorInfo(uint doctorId) public view returns (Doctor memory) {
        return doctors[doctorId];
    }

    // Patient functions

    function getPatientInfo(uint patientId) public view returns (Patient memory) {
        return patients[patientId];
    }

    function getMedicalHistory(uint patientId) public view returns (MedicalRecord[] memory) {
        uint recordCount = 0;
        for (uint i = 0; i < medicalRecords.length; i++) {
            if (medicalRecords[i].patientId == patientId) {
                recordCount++;
            }
        }

        MedicalRecord[] memory patientRecords = new MedicalRecord[](recordCount);
        uint index = 0;
        for (uint i = 0; i < medicalRecords.length; i++) {
            if (medicalRecords[i].patientId == patientId) {
                patientRecords[index] = medicalRecords[i];
                index++;
            }
        }

        return patientRecords;
    }

    // Utility functions

    function getAllDoctors() public view returns (Doctor[] memory) {
        Doctor[] memory allDoctors = new Doctor[](doctorCount);
        for (uint i = 1; i <= doctorCount; i++) {
            allDoctors[i - 1] = doctors[i];
        }
        return allDoctors;
    }

    function getAllPatients() public view returns (Patient[] memory) {
        Patient[] memory allPatients = new Patient[](patientCount);
        for (uint i = 1; i <= patientCount; i++) {
            allPatients[i - 1] = patients[i];
        }
        return allPatients;
    }

    function getDoctorsByHospital() public view returns (Doctor[] memory) {
        // This function can return doctors based on hospital
        // Implementation depends on how hospitals are managed
        // For now, it returns all doctors
        return getAllDoctors();
    }

    // Admin management

    function addAdmin(address newAdmin) public onlyAdmin {
        isAdmin[newAdmin] = true;
    }

    function removeAdmin(address admin) public onlyAdmin {
        isAdmin[admin] = false;
    }
}
