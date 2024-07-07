import React, { useEffect, useState } from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

import axios from "axios"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import "./datatables.scss"

const AxiosAPI = axios.create();  

const DatatableTables = () => {

  function viewForm(e) {
    console.log(e);
  }

  const [indentData, setIndentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosAPI.get("http://localhost:5000/api/getData");
        setIndentData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const emp_id = localStorage.getItem('employee_id');


  const rows = Array.isArray(indentData) ? indentData
  .filter(item => item.employee_id === emp_id) // Filter based on employee_id
  .map((item, index) => ({
    college: item.college,
    department: item.department,
    event: item.event,
    resource_person: item.resource_person,
    date: item.date,
    status: 'pending...',
    info: <Button color="primary" onClick={() => { viewForm(item._id) }}>view</Button>,
    edit: <i className="fas fa-edit"></i>,
  })) : [];
  
  const data = {
    columns: [
      {
        label: "College",
        field: "college",
        sort: "asc",
        width: 150,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 270,
      },
      {
        label: "Event",
        field: "event",
        sort: "asc",
        width: 200,
      },
      {
        label: "Resource Person",
        field: "resource_person",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "----",
        field: "info",
        sort: "asc",
        width: 150,
      },
    ],
    rows: rows
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Tables" breadcrumbItem="Data Table" />
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>Indent Requests </CardTitle>
                <MDBDataTable responsive striped bordered data={data} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    </React.Fragment>
  )
}

export default DatatableTables
