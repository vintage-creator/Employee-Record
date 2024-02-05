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

        // Construct the employee object
        const {
            firstname, lastname, email, birthdate, address, phoneNumber, emergencyContact, citizenship, ssn, veteranStatus, disabilities,
            employerName, positionTitle, reportsTo, employmentType, usualDaysOfEmployment, startDate, contractEndDate, bankDetails, tax
        } = req.body;

        await validateEmail(email);

        // Check if a file was uploaded before accessing its properties
        const filePath = req.file ? req.file.path : null;

        const employeeData = {
            firstname, lastname, email, birthdate, address, phoneNumber, emergencyContact, citizenship, ssn, veteranStatus,
            disabilities, employerName, positionTitle, reportsTo, employmentType, usualDaysOfEmployment, startDate,
            contractEndDate, bankDetails, tax,
            // Add the file path to the employee data if available
            uploadedForm: filePath,
        };

        await Employee.create(employeeData);

        // Send success response
        res.status(201).json({ message: 'Employee data submitted successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { upload, submitdataFn };
