
const Data = require("../models/indentForm");

const path = require('path');

const fs = require('fs');


const indentUser = async (req, res, next) => {
  
  const files = req.files;

  let stickersFile, foamBoardsFile, flexFile, certificateFile;

  const fileFields = ["flexFile", "stickersFile", "foamBoardsFile", "certificateFile"];


  let flexImg, stickersImg, foamboardImg, certificateImg;


  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fieldname = file.fieldname;

    if (fileFields.includes(fieldname)) {
      switch (fieldname) {
        case "flexFile":
          flexImg = file;
          break;
        case "stickersFile":
          stickersImg = file;
          break;
        case "foamBoardsFile":
          foamboardImg = file;
          break;
        case "certificateFile":
          certificateImg = file;
          break;
        default:
          break;
      }
    }
  }
  if(flexImg){
    const fileImgExtension = path.extname(flexImg.originalname);
    const flexFileName = flexImg.filename
    const oldFlexFilePath = "public/images/"+flexFileName;
    const newFlexFilePath = "public/images/flex-images/"+flexFileName+fileImgExtension;
    console.log(flexFileName)
    flexFile = flexFileName+fileImgExtension
    console.log(flexFile);

    fs.rename(oldFlexFilePath, newFlexFilePath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      } else {
        console.log('flex renamed successfully');
      }
    });
  }

  if(stickersImg){
    const stickersFileImgExtension = path.extname(stickersImg.originalname);
    const stickersFileName = stickersImg.filename
    const oldStickersFilePath = "public/images/"+stickersFileName;
    const newStickersFilePath = "public/images/sticker-images/"+stickersFileName+stickersFileImgExtension;
    console.log(stickersFileName)
    stickersFile = stickersFileName+stickersFileImgExtension;
    fs.rename(oldStickersFilePath, newStickersFilePath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      } else {
        console.log('stickers renamed successfully');
      }
    });
  }

  if(foamboardImg){
    const foamBoardsFileImgExtension = path.extname(foamboardImg.originalname);
    const foamBoardsFileName = foamboardImg.filename
    const oldfoamBoardsFilePath = "public/images/"+foamBoardsFileName;
    const newfoamBoardsFilePath = "public/images/foamboard-images/"+foamBoardsFileName+foamBoardsFileImgExtension;
    console.log(foamBoardsFileName)
    foamBoardsFile = foamBoardsFileName+foamBoardsFileImgExtension;
    fs.rename(oldfoamBoardsFilePath, newfoamBoardsFilePath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      } else {
        console.log('foam boards renamed successfully');
      }
    });
  }


  if(certificateImg){
    const certificatesFileImgExtension = path.extname(certificateImg.originalname);

    const certificatesFileName = certificateImg.filename

    const oldcertificatesFilePath = "public/images/"+certificatesFileName;

    const newcertificatesFilePath = "public/images/certificate-images/"+certificatesFileName+certificatesFileImgExtension;

    console.log(certificatesFileName)

    certificateFile = certificatesFileName+certificatesFileImgExtension;

    fs.rename(oldcertificatesFilePath, newcertificatesFilePath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      } else {
        console.log('certificates renamed successfully');
      }
    });
  }

  try {
    const { college,
      department,
      others,
      event,
      date,
      resource_person,
      flexHeight,
      flexWidth,
      flexCopies,
      flexQuality,
      flexPrice,
      flexFeet,
      stickerSize,
      stickerCopies,
      foamBoardSize,
      foamBoardCopies,
      foamBoardPrice,
      certificateSize,
      certificateCopies,
      certificatePrice,
      employee_id,
    } = req.body;
    
    const newData = new Data({
      college, department, others, event, date, resource_person, flexHeight, flexWidth, flexCopies, flexQuality,
      flexFile, flexPrice, flexFeet, stickerSize, stickerCopies, stickersFile, foamBoardSize, foamBoardCopies, foamBoardPrice, foamBoardsFile, certificateSize, certificateCopies,
      certificateFile, certificatePrice, employee_id
    });

    await newData.save();
    console.log(newData);
    return res.status(201).json({ message: 'Data created succesfully' })
  }
  catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}


const getIndentData = async(req, res, next) => {
  let indentData
  try{
    indentData = await Data.find();
    console.log(indentData);
    return res.status(201).json(indentData);
  }
  catch(err) {
    console.log(err);
    return res.status(500).json({error: 'Not detected Data'})
  }
}

exports.indentUser = indentUser;

exports.getIndentData = getIndentData;