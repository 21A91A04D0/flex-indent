import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb"
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
const AxiosAPI = axios.create();

const AllDetails = ({ location }) => {
    const searchParams = new URLSearchParams(location.search);
    const eid = searchParams.get('id');
    console.log('ID:', eid);

    const [indentData, setIndentData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosAPI.get("http://localhost:5000/api/getData");
                setIndentData(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []); // Fetch all data initially

    // Filter the indentData array based on eid
    const filteredData = indentData.filter(item => item._id === eid);
    console.log(filteredData)
    
    const data = {
        // "flexFeet": "",
        "flexHeight": "",
        "certificateCopies": "",
        "certificateFile": "",
        "certificatePrice": "",
        "certificateSize": "",
        "college": "",
        "date": "",
        "department": "",
        "employee_id": "",
        "event": "",
        "flexCopies": "",
        "flexFile": "",
        "flexHeight": "",
        "flexPrice": "",
        "flexQuality": "",
        "flexWidth": "",
        "foamBoardCopies": "",
        "foamBoardPrice": "",
        "foamBoardSize": "",
        "foamBoardsFile": "",
        "others": "",
        "resource_person": "",
        "stickerCopies": "",
        "stickerSize": "",
        "stickersFile": ""
    };
    filteredData.map(item => {
        data.flexWidth = item.flexWidth
        data.flexHeight = item.flexHeight
        data.flexCopies = item.flexCopies
        data.flexPrice = item.flexPrice
        // data.flexFeet = item.flexFeet
        data.flexQuality = item.flexQuality
        data.stickerCopies = item.stickerCopies
        data.stickerSize = item.stickerSize
        data.stickersFile = item.stickersFile
        data.flexFile = item.flexFile
        data.certificateCopies = item.certificateCopies
        data.certificateFile = item.certificateFile
        data.certificateSize = item.certificateSize
        data.certificatePrice = item.certificatePrice
        data.foamBoardCopies = item.foamBoardCopies
        data.foamBoardPrice = item.foamBoardPrice
        data.foamBoardSize = item.foamBoardSize
        data.foamBoardsFile = item.foamBoardsFile
        data.college = item.college
        data.date = item.date
        data.department = item.department
        data.employee_id = item.employee_id
        data.event = item.event
        data.resource_person = item.resource_person
        data.others = item.others
    })
    console.log(data);
    return (

        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Form" breadcrumbItem="Flex-Indent" />
                <Row>
                    <img src={`http://localhost:5000/public/images/flex-images/${filteredData[0]?.flexFile}`} alt="flexImage" />
                </Row>
            </div>
        </React.Fragment>
    );
};

export default AllDetails;
