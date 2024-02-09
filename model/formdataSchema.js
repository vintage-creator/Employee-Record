const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    birthdate: {
        month: String,
        day: String,
        year: String,
    },
    address: {
        streetAddressLine1: String,
        streetAddressLine2: String,
        city: String,
        state: String,
        postcode: String,
    },
    phoneNumber: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    emergencyContact: {
        name: String,
        phone: String,
    },
    citizenship: String,
    ssn: String,
    veteranStatus: String,
    disabilities: [String],
    employerName: String,
    positionTitle: String,
    reportsTo: String,
    employmentType: String,
    usualDaysOfEmployment: [String],
    startDate: {
        month: String,
        day: String,
        year: String,
    },
    contractEndDate: {
        month: String,
        day: String,
        year: String,
    },
    bankDetails: {
        institutionName: String,
        accountOwnerName: String,
        routingNumber: String,
        accountNumber: String,
    },
    taxOptions: [String],
    taxDeclarationForm: String,
});

module.exports = mongoose.model('Employee', employeeSchema);
