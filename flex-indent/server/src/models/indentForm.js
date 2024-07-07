
const mongoose = require("mongoose");

const IndentSchema = mongoose.Schema({
    flexHeight: {
        type: String
    },
    flexWidth: {
        type: String
    },
    flexCopies: {
        type: String
    },
    flexQuality: {
        type: String
    },
    flexPrice: {
        type: String
    },
    flexFile: {
        type: String
    },
    stickerSize: {
        type: String
    },
    stickerCopies: {
        type: String
    },
    stickersFile:{
        type: String
    },
    foamBoardSize: {
        type: String
    },
    foamBoardCopies: {
        type: String
    },
    foamBoardPrice: {
        type: String
    },
    foamBoardsFile: {
        type: String
    },
    certificateSize: {
        type: String
    },
    certificateCopies: {
        type: String
    },
    certificatePrice: {
        type: String
    },
    certificateFile: {
        type: String
    },
    college: {
        type: String
    },
    department: {
        type: String
    },
    others: {
        type: String
    },
    event: {
        type: String
    },
    date: {
        type: String
    },
    resource_person: {
        type: String
    },
    employee_id: {
        type: String
    },
})

module.exports = mongoose.model("Indent-form", IndentSchema);