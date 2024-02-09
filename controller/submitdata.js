const Employee = require("../model/formdataSchema");
const { validateEmail } = require("../utils");
const multer = require('multer');
const path = require('path');

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Specify the directory where you want to save the uploaded files
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 3 * 1024 * 1024 }, // Limit file size to 3MB
});

const submitdataFn = async (req, res) => {
    try {
        // Parse JSON strings to JavaScript objects
        const {
            birthdate, address, emergencyContact, startDate, contractEndDate, bankDetails,
            disabilities, usualDaysOfEmployment, taxOptions
        } = req.body;
        const parsedBirthdate = JSON.parse(birthdate);
        const parsedAddress = JSON.parse(address);
        const parsedEmergencyContact = JSON.parse(emergencyContact);
        const parsedStartDate = JSON.parse(startDate);
        const parsedContractEndDate = JSON.parse(contractEndDate);
        const parsedBankDetails = JSON.parse(bankDetails);
        const parsedDisabilities = JSON.parse(disabilities);
        const parsedUsualDaysOfEmployment = JSON.parse(usualDaysOfEmployment);
        const parsedTaxOptions = JSON.parse(taxOptions);

        // Validate email
        await validateEmail(req.body.email);

        // Check if a file was uploaded before accessing its properties
        const filePath = req.file ? req.file.path : null;

        const employeeData = {
            ...req.body,
            birthdate: parsedBirthdate,
            address: parsedAddress,
            emergencyContact: parsedEmergencyContact,
            startDate: parsedStartDate,
            contractEndDate: parsedContractEndDate,
            bankDetails: parsedBankDetails,
            disabilities: parsedDisabilities,
            usualDaysOfEmployment: parsedUsualDaysOfEmployment,
            taxOptions: parsedTaxOptions,
            taxDeclarationForm: filePath,
        };
        // Create employee
        await Employee.create(employeeData);

        // Send success response
        res.status(201).json({ message: 'Employee data submitted successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { upload, submitdataFn };
