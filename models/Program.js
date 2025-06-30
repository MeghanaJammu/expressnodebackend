const mongoose = require("mongoose");
const { Schema } = mongoose;

const programSchema = new Schema({
    createdAt: {
        type : Date,
        default : Date.now,
    },
    schoolNo: {
        type: String,
        required: true,
    },
    dpc_name: {
        type: String,
        required: true,
    },
    udise_code: {
        type: String,
        required: true,
    },
    yearOfImplementation: {
        type: Number,
        required: true,
    },
    dpo: {
        type: Boolean,
        default: false,
        required: true,
    },
    schoolName: {
        type: String,
        required: true,
    },
    cityVillageName: {
        type: String,
        required: true,
    },
    blockTaluka: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    trade: {
        type: String,
        required: true,
    },
    compositeOrNot: {
        type: Boolean,
        default: false,
    },
    existingOrNew: {
        type: String,
        enum: ["existing", "new"],
        required: true,
    },
    division: {
        type: String,
        required: true,
    },
    principalName: {
        type: String,
        required: true,
    },
    principalMobile: {
        type: [Number],
        required: true,
    },
    vtName: {
        type: String,
    },
    vtMobile: {
        type: [Number],
        required: true,
    },
    jobRole: {
        type: String,
        required: true,
    },
    managementOption: {
        type: String,
        required: true,
    },
    googleFormsReceived: {
        type: Boolean,
        default: false,
    },
    workshopSetup: {
        type: Boolean,
        default: false,
    },
    syllabusSoftCopyReceived: {
        type: Boolean,
        default: false,
    },
    guestLectureStarted: {
        type: Boolean,
        default: false,
    },
    onlineCommunityClass: {
        type: Boolean,
        default: false,
    },
    internship: {
        type: Boolean,
        default: false,
    },
    goodPractices: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    remark: {
        type: String,
    },
    mode: {
        type: String,
        enum: ["offline", "online"],
        required: true,
    },
    physicalClasses: {
        type: Boolean,
        default: false,
    },
    communityVisit: {
        type: Boolean,
        default: false,
    },
    lab: {
        type: Boolean,
        default: false,
    },
    toolsAvailability: {
        type: Boolean,
        default: false,
    },
    books: {
        type: [String],
    },
    resourceRequired: {
        type: String,
    },
    rawMaterial: {
        type: String,
    },
    activistUpdates: {
        type: [String],
    },
    activistId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    dailyUpdates: {
        type: [String],
    }
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
