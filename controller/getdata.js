const Employee = require("../model/formdataSchema");

const getdataFn = async(req, res) => {
    try {
        const allEmployees = await Employee.find();
    
        if (allEmployees.length === 0) {
          return res.status(404).json({ message: 'No employee data found' });
        }
    
        res.status(200).json(allEmployees);
      } catch (error) {
        console.error('Error fetching employee data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = {getdataFn};