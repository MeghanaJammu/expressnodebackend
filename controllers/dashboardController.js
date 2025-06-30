const Program = require('../models/Program');
const User = require('../models/User');
// const getProgramDetailsByActivistId = async (req, res) => {
//     if(!req?.params?.id) {
//         res.status(400).json({error: 'Please include Activist ID'});
//     }
//     const activistID = req.params.id;
//     const program = await Program.findOne({ activistID: activistID }).exec();
//     if(!program) {
//         res.status(404).json({error: 'Program not found'});
//     } 
//     res.status(200).json(program);
// }

const getProgramDetailsByProgramId = async (req, res) => {
    if(!req?.params?.id) {
        res.status(400).json({error: 'Please include Program ID'});
    }
    const programID = req.params.id;
    const program = await Program.findById(programID).exec();
    if(!program) {
        res.status(404).json({error: 'Program not found'});
    }
    res.status(200).json(program);
} //TESTED

const enterProgramDetails = async (req, res) => {
  try {
    const {
      activistID,
      schoolNo,
      dpc_name,
      udise_code,
      yearOfImplementation,
      dpo,
      schoolName,
      cityVillageName,
      blockTaluka,
      district,
      region,
      trade,
      compositeOrNot,
      existingOrNew,
      division,
      principalName,
      principalMobile,
      vtName,
      vtMobile,
      jobRole,
      managementOption,
      googleFormsReceived,
      workshopSetup,
      syllabusSoftCopyReceived,
      guestLectureStarted,
      onlineCommunityClass,
      internship,
      goodPractices,
      startDate,
      endDate,
      remark,
      mode,
      physicalClasses,
      communityVisit,
      lab,
      toolsAvailability,
      books,
      resourceRequired,
      rawMaterial,
      activistUpdates
    } = req.body;

    // Create a new program instance
    const program = new Program({
      activistID,
      schoolNo,
      dpc_name,
      udise_code,
      yearOfImplementation,
      dpo,
      schoolName,
      cityVillageName,
      blockTaluka,
      district,
      region,
      trade,
      compositeOrNot,
      existingOrNew,
      division,
      principalName,
      principalMobile,
      vtName,
      vtMobile,
      jobRole,
      managementOption,
      googleFormsReceived,
      workshopSetup,
      syllabusSoftCopyReceived,
      guestLectureStarted,
      onlineCommunityClass,
      internship,
      goodPractices,
      startDate,
      endDate,
      remark,
      mode,
      physicalClasses,
      communityVisit,
      lab,
      toolsAvailability,
      books,
      resourceRequired,
      rawMaterial,
      activistUpdates
    });

    // Save the program to the database
    const savedProgram = await program.save();
    const username = req.user;
    const foundUser = User.findOne({username: username}).exec();
    foundUser.programs.push(savedProgram._id);
    const result = await foundUser.save();
    if(!result) {
        res.status(500).json({error: 'An error occurred while saving the program to the user'});
    }
    res.status(201).json(savedProgram);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the program.' });
  }
}; //TESTED

const editProgramDetails = async (req, res) => {
    const programID = req.params.id;
    const program = await Program.findOne({ _id: programID }).exec();
    if(!program) {
        res.status(404).json({error: 'Program not found'});
        return;
    }
    try{
        const {
            schoolNo,
            dpc_name,
            udise_code,
            yearOfImplementation,
            dpo,
            schoolName,
            cityVillageName,
            blockTaluka,
            district,
            region,
            trade,
            compositeOrNot,
            existingOrNew,
            division,
            principalName,
            principalMobile,
            vtName,
            vtMobile,
            jobRole,
            managementOption,
            googleFormsReceived,
            workshopSetup,
            syllabusSoftCopyReceived,
            guestLectureStarted,
            onlineCommunityClass,
            internship,
            goodPractices,
            startDate,
            endDate,
            remark,
            mode,
            physicalClasses,
            communityVisit,
            lab,
            toolsAvailability,
            books,
            resourceRequired,
            rawMaterial,
            activistUpdates
        } = req.body;

        program.schoolNo = schoolNo;
        program.dpc_name = dpc_name;
        program.udise_code = udise_code;
        program.yearOfImplementation = yearOfImplementation;
        program.dpo = dpo;
        program.schoolName = schoolName;
        program.cityVillageName = cityVillageName;
        program.blockTaluka = blockTaluka;
        program.district = district;
        program.region = region;
        program.trade = trade;
        program.compositeOrNot = compositeOrNot;
        program.existingOrNew = existingOrNew;
        program.division = division;
        program.principalName = principalName;
        program.principalMobile = principalMobile;
        program.vtName = vtName;
        program.vtMobile = vtMobile;
        program.jobRole = jobRole;
        program.managementOption = managementOption;
        program.googleFormsReceived = googleFormsReceived;
        program.workshopSetup = workshopSetup;
        program.syllabusSoftCopyReceived = syllabusSoftCopyReceived;
        program.guestLectureStarted = guestLectureStarted;
        program.onlineCommunityClass = onlineCommunityClass;
        program.internship = internship;
        program.goodPractices = goodPractices;
        program.startDate = startDate;
        program.endDate = endDate;
        program.remark = remark;
        program.mode = mode;
        program.physicalClasses = physicalClasses;
        program.communityVisit = communityVisit;
        program.lab = lab;
        program.toolsAvailability = toolsAvailability;
        program.books = books;
        program.resourceRequired = resourceRequired;
        program.rawMaterial = rawMaterial;
        program.activistUpdates = activistUpdates;

        // Save the updated program
        const updatedProgram = await program.save();
        res.json(updatedProgram);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while  updating the program.' });
    }
} //TESTED

const deleteProgramDetails = async (req, res) => {
    const programID = req.params.id;
    const program = await Program.findOne({ _id: programID }).exec();
    if(!program) {
        res.status(404).json({error: 'Program not found'});
        return;
    }
    try{
        await Program.findByIdAndDelete(programID);
        res.json({message: 'Program deleted successfully'});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the program.' });
    }
} //TESTED

const getAllActivists = async (req, res) => {
    const activists = await User.find({isAdmin:false}).exec();
    console.log(activists);
    res.json(activists);
} //TESTED

const getAllPrograms = async (req, res) => {
    const currentDate = new Date();
    const programs = await Program.find({
      endDate: { $gte: currentDate }
    }).exec();
    res.status(200).json(programs);
} //TESTED

const getActivistById = async (req, res) => {
    const activistID = req.params.id;
    const activist = await User.findOne({ _id: activistID }).exec();
    if(!activist) {
        res.status(404).json({error: 'Activist not found'});
        return;
    }
    res.json(activist);
} //TESTED

module.exports = {
    getProgramDetailsByProgramId,
    enterProgramDetails,
    editProgramDetails,
    deleteProgramDetails,
    getAllActivists,
    getAllPrograms,
    getActivistById
}