import React, { useState,useEffect } from "react"

import axios from "axios"
import {
  Card,
  CardBody,
  Col,
  Row,
  Button,
  CardTitle,
  Label,
  Input,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AxiosAPI = axios.create();

const FlexIndentForm = () => {
  const [customchk, setcustomchk] = useState(true)

  const [toggleSwitch, settoggleSwitch] = useState(true)

  //usestate for checkboxes
  const [properties, setProperties] = useState({
    Flex: false,
    Stickers: false,
    FoamBoards: false,
    Certificates: false,
  });

  const [flexCost, setFlexCost] = useState(0); 
  const [totalFlexFeet,setTotalFlexFeet] = useState(0);
  const [stickersCost, setStickersCost] = useState(0);
  const [foamBoardsCost, setFoamBoardsCost] = useState(0);
  const [certificateCost, setCertificateCost] = useState(0);


  const [formData, setFormData] = useState({
    flexHeight: '',
    flexWidth: '',
    flexCopies: '',
    flexQuality: '',
    flexFile: '',
    flexPrice:'',
    // flexFeet:'',
    stickerSize: '',
    stickerCopies: '',
    stickersFile:'',
    foamBoardSize: '',
    foamBoardCopies: '',
    foamBoardPrice: '',
    foamBoardsFile:'',
    certificateSize: '',
    certificateCopies: '',
    certificatePrice:'',
    certificateFile:'',
    college:'',
    department:'',
    others:'',
    event:'',
    date:'',
    resource_person:'',
    employee_id:'',
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setProperties({
      ...properties,
      [id]: checked,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const getsum_flex = (e) => {
  const flex_height = parseInt(formData.flexHeight)
  const flex_width = parseInt(formData.flexWidth)
  const flex_copies = parseInt(formData.flexCopies)
  const cost = parseInt(flex_height * flex_width * flex_copies);
  
  setFlexCost(cost);
  const Feet = parseInt(flex_height*flex_width);
  setTotalFlexFeet(Feet);
  setFormData({...formData,flexPrice:cost,flexFeet:Feet})
  
}
const getsum_stickers = (e) => {
  const stickers_size = parseInt(formData.stickerSize)
  const stickers_copies = parseInt(formData.stickerCopies)
  const s_cost = parseInt(stickers_copies * stickers_size * 5);
  setFormData({...formData, stickersPrice:s_cost})
  setStickersCost(s_cost);
}
const getsum_foamBoards = (e) => {
  const foamBoard_size = parseInt(formData.foamBoardSize);
  const foamBoard_copies = parseInt(formData.foamBoardCopies);

  const f_cost = parseInt(foamBoard_copies * foamBoard_size * 10);
  setFormData({...formData, foamBoardPrice:f_cost});
  setFoamBoardsCost(f_cost);
}
const getsum_certificates = (e) => {
  const certificate_size = parseInt(formData.certificateSize);
  const certificate_copies = parseInt(formData.certificateCopies);

  const c_cost = parseInt(certificate_copies * certificate_size * 15);

  setFormData({...formData,certificatePrice:c_cost});
  setCertificateCost(c_cost);
}

  const handleSubmit = () => {
    const Inputfields = new FormData();
    Inputfields.append('flexHeight',formData.flexHeight);
    Inputfields.append('flexWidth', formData.flexWidth);
    Inputfields.append('flexCopies', formData.flexCopies);
    Inputfields.append('flexQuality',formData.flexQuality);
    // Inputfields.append('flexFeet',formData.flexFeet);
    Inputfields.append('flexPrice',formData.flexPrice); 
    Inputfields.append('flexFile',formData.flexFile);
    Inputfields.append('stickerSize',formData.stickerSize)
    Inputfields.append('stickerCopies',formData.stickerCopies);
    Inputfields.append('stickersFile',formData.stickersFile);
    Inputfields.append('foamBoardSize',formData.foamBoardSize);
    Inputfields.append('foamBoardCopies',formData.foamBoardCopies);
    Inputfields.append('foamBoardPrice',formData.foamBoardPrice);
    Inputfields.append('foamBoardsFile',formData.foamBoardsFile);
    Inputfields.append('certificateCopies',formData.certificateCopies);
    Inputfields.append('certificateSize',formData.certificateSize);
    Inputfields.append('certificatePrice',formData.certificatePrice);
    Inputfields.append('certificateFile',formData.certificateFile);
    Inputfields.append('college',formData.college);
    Inputfields.append('department',formData.department);
    Inputfields.append('event',formData.event);
    Inputfields.append('date',formData.date);
    Inputfields.append('resource_person',formData.resource_person);
    Inputfields.append('others',formData.others);
    Inputfields.append('employee_id',formData.employee_id);

    AxiosAPI.post("http://localhost:5000/api/addIndentUser", Inputfields)
    .then(res => {
      alert("success")
    })
    .catch(err => {
      alert("not working")
    })
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Form" breadcrumbItem="Flex-Indent" />
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label">Name of the College</label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={(e)=>setFormData({...formData,college:e.target.value})}>
                      <option>Select</option>
                      <option>Aditya Engineering College(A)</option>
                      <option>Aditya College Of Engineering and Technology(A)</option>
                      <option>Aditya College Of Engineering(A)</option>
                      <option>Aditya Polytechnic colleges(A)</option>
                      <option>Aditya Pharmacy College (A)</option>
                      <option>Aditya College of Pharmacy (A)</option>
                      <option>Aditya Global Business School</option>
                      <option>Aditya Degree and PG College</option>
                      <option>Technical Hub</option>
                    </select>
                  </div>
                </Row>


                <Row className="mb-3">
                  <label className="col-md-2 col-form-label">Department</label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={(e)=>setFormData({...formData,department:e.target.value})}>
                      <option>Select</option>
                      <option>CSE</option>
                      <option>ECE-I</option>
                      <option>ECE-II</option>
                      <option>ME</option>
                      <option>EEE</option>
                      <option>CE</option>     
                      <option>IT</option>
                      <option>Min.E</option>
                      <option>PT</option>
                      <option>Ag.E</option>
                      <option>AIML</option>
                      <option>DS</option>
                      <option>HBS</option>
                      {/* <option></option> */}
                    </select>
                  </div>
                </Row>

                <Row className="mb-3">
                  <label
                    htmlFor=""
                    className="col-md-2 col-form-label"
                  >
                    If other Department:
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="enter department name"
                      onChange={(e)=>setFormData({...formData,others:e.target.value})}
                    />
                  </div>
                </Row>


                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Name of the Event
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="enter event name"
                      onChange={(e)=>setFormData({...formData,event:e.target.value})}
                    />
                  </div>
                </Row>


                <Row className="mb-3">
                  <label
                    htmlFor="example-date-input"
                    className="col-md-2 col-form-label"
                  >
                    Date of the event
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="date"
                      placeholder="2019-08-19"
                      id="example-date-input"
                      onChange={(e)=>setFormData({...formData,date:e.target.value})}
                    />
                  </div>
                </Row>

                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Resource Person
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="enter the resource person name"
                      onChange={(e)=>setFormData({...formData,resource_person:e.target.value})}
                    />
                  </div>
                </Row>

                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Employee_id
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="enter Employee_id"
                      onChange={(e)=>setFormData({...formData,employee_id:e.target.value})}
                    />
                  </div>
                </Row>

                <Row className="mb-3">
                  <div className="mb-3">
                      <label>Indent For: {" "}</label>{"  "}

                      {/* flex checkbox */}
                      <input className="form-check-input" type="checkbox" id="Flex" checked={properties.Flex} onChange={handleCheckboxChange} />
                      <label className="form-check-label" htmlFor="Flex">Flex</label>{" "}

                      {/* stickers checkbox */}
                      <input className="form-check-input" type="checkbox" id="Stickers" checked={properties.Stickers} onChange={handleCheckboxChange} />
                      <label className="form-check-label" htmlFor="Stickers">Stickers</label>{" "}

                      {/* foam boards checkbox */}
                      <input className="form-check-input" type="checkbox" id="FoamBoards" checked={properties.FoamBoards} onChange={handleCheckboxChange} />
                      <label className="form-check-label" htmlFor="invalidCheck">Foam Boards</label>{" "}

                      {/* certifications checkbox */}
                      <input className="form-check-input" type="checkbox" id="Certificates" checked={properties.Certificates} onChange={handleCheckboxChange} />
                      <label className="form-check-label" htmlFor="invalidCheck">Certifiactes</label>
                  </div>
                </Row>

                {/* Rendering for flex */}
                {properties.Flex && (
                  <Row className="mb-3">
                    <label><strong>Flex: </strong></label>

                    <div>
                      <label>Flex height: </label>{" "}

                      <input type="number" 
                        name="flexHeight" 
                        value = {formData.flexHeight} 
                        placeholder="enter flex height in feet" 
                        onBlur={getsum_flex}
                        onChange={handleInputChange} 
                        />{" "}
                      <label>Flex width: </label>{" "}

                      <input type="number"
                        name="flexWidth"
                        value = {formData.flexWidth} 
                        placeholder="enter flex width in feet" 
                        onBlur={getsum_flex}
                        onChange={handleInputChange} 
                      />{" "}


                      <label>Total Feet:</label>{" "}
                      <span>{totalFlexFeet}</span> 
                    </div>
                    <div>
                      <label>No of copies:</label>{" "}
                      <input type="number" 
                        name = "flexCopies" 
                        value={formData.flexCopies} 
                        placeholder="Number of copies" 
                        onBlur={getsum_flex}
                        onChange={handleInputChange}
                      />{" "}

                      <label>Quality</label>{" "}

                      <select name="flexQuality" value={formData.flexQuality} onChange={handleInputChange}>

                        <option>select</option>
                        <option>Flex</option>
                        <option>Star Flex</option>

                      </select>{" "}

                      <label>Enter the cost:</label>{" "}

                      <span>{flexCost}</span>

                    </div>

                    <div className="mb-3">
                        <label>upload soft copy:</label>
                        <input type="file"
                          className="form-control"
                          name="flexFile"
                          onChange={(e)=>{setFormData({...formData,flexFile:e.target.files[0]})}}
                        />
                    </div>
                  </Row>
                )}


                {/* Rendering for stickers */}
                {properties.Stickers && (
                  <Row className="mb-3">
                    <label><strong>Stickers: </strong></label>
                    <div>
                      <label>Sticker size: </label>{" "}
                      <input type = "number"
                        name="stickerSize"
                        value = {formData.stickerSize} 
                        placeholder="enter size"
                        onBlur={getsum_stickers}
                        onChange={handleInputChange} 
                      />{" "}

                      <label>No of Copies: </label>{" "}

                      <input type = "number"
                        name="stickerCopies" 
                        value = {formData.stickerCopies} 
                        onBlur={getsum_stickers} 
                        placeholder="enter number of copies" 
                        onChange={handleInputChange} 
                      />{" "}

                      <label>Total Cost: </label>{" "}

                      <span>{stickersCost}</span>
                    </div>
                    <div className="mb-3">
                      <label>upload soft copy:</label>
                      <input type="file" 
                        className="form-control" 
                        name="flexFile" 
                        onChange={(e)=>{setFormData({...formData,stickersFile:e.target.files[0]})}}/>
                    </div>
                  </Row>
                )}
                




                {/* Rendering for Foam Boards */}

                {properties.FoamBoards && (
                  <Row className="mb-3">
                    <label><strong>Foam Boards: </strong></label>

                    <div>
                      <label>Foam Board size: </label>{" "}
                      <input type = "number"
                        name="foamBoardSize" 
                        value = {formData.foamBoardSize} 
                        placeholder="enter size" 
                        onBlur={getsum_foamBoards}
                        onChange={handleInputChange} 
                      />{" "}

                      <label>No of Copies: </label>{" "}
                      <input type = "number"
                        name="foamBoardCopies" 
                        value = {formData.foamBoardCopies} 
                        placeholder="enter number of copies"
                        onBlur={getsum_foamBoards} 
                        onChange={handleInputChange} 
                      />{" "}

                      <label>Total Cost: </label>
                      <span>{foamBoardsCost}</span>
                    </div>

                    <div className="mb-3">
                      <label>upload soft copy:</label>
                      <input type="file" 
                        className="form-control" 
                        name="flexFile" 
                        onChange={(e)=>{setFormData({...formData,foamBoardsFile:e.target.files[0]})}}
                      />
                    </div>
                  </Row>
                )}
                



                {/* Rendering for certificates */}
                {properties.Certificates && (
                  <Row className="mb-3">
                    <label><strong>Certificates</strong></label>
                    <div>
                      <label>certificates size: </label>{" "}
                      <input type = "text"
                        name="certificateSize" 
                        value = {formData.certificateSize}
                        onBlur={getsum_certificates}
                        onChange={handleInputChange}
                      />{" "}


                      <label>No of Copies: </label>{" "}
                      <input type = "number"
                        name="certificateCopies" 
                        value = {formData.certificateCopies} 
                        placeholder="enter number of copies" 
                        onBlur={getsum_certificates}
                        onChange={handleInputChange} 
                      />{" "}
                    

                      <label>Total Cost: </label>
                      <span>{certificateCost}</span>
                    </div>
                    <div className="mb-3">
                      <label>upload soft copy:</label>
                      <input type="file" 
                        className="form-control" 
                        name="flexFile" 
                        onChange={(e)=>{setFormData({...formData,certificateFile:e.target.files[0]})}}
                      />
                    </div>
                  </Row>
                )}
                
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default FlexIndentForm
