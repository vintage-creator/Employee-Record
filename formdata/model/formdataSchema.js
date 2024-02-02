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
        month: Number,
        day: Number,
        year: Number,
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
        month: Number,
        day: Number,
        year: Number,
    },
    contractEndDate: {
        month: Number,
        day: Number,
        year: Number,
    },
    bankDetails: {
        institutionName: String,
        accountOwnerName: String,
        routingNumber: String,
        accountNumber: String,
    },
    tax: {
        options: [String],
        uploadedForm: String,
    },
});

module.exports = mongoose.model('Employee', employeeSchema);
