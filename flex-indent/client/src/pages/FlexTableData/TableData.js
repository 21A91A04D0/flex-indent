import React, { useEffect, useState } from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

import axios from "axios"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import "./datatables.scss"
import { useHistory } from "react-router-dom";

const AxiosAPI = axios.create();  

const DatatableTables = () => {
  const history = useHistory();
  function viewForm(e) {
    // console.log(e);
    history.push(`/details?id=${e}`);
  }

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
  }, []);

  // const rows = Array.isArray(indentData) ? indentData.map((item, index) => ({
  //   console.log(item)
  //   college: item.college,
  //   department: item.department,
  //   event: item.event,
  //   resource_person: item.resource_person,
  //   date:item.date,
  //   status:'pending...',
  //   info:<Button color="primary" onClick={()=>{viewForm(item._id)}}>view</Button>,
  //   edit:<i className="fas fa-edit"></i>,
  // })) : [];
  const rows = Array.isArray(indentData) ? indentData.map((item, index) => {
    // console.log(item); // Log the item object to check if _id is present
    return {
      college: item.college,
      department: item.department,
      event: item.event,
      resource_person: item.resource_person,
      date: item.date,
      status: 'pending...',
      info: <Button color="primary" onClick={() => { viewForm(item._id) }}>view</Button>,
      edit: <i className="fas fa-edit"></i>,
    };
  }) : [];
  
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
        label: "status",
        field: "status",
        sort: "asc",
        width: 150,
      },
      {
        label: "----",
        field: "info",
        sort: "asc",
        width: 150,
      },
      {
        label: "Edit",
        field: "edit",
        sort: "asc",
        width : "150",
      }
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
                {/* <CardSubtitle className="mb-3">
                  mdbreact DataTables has most features enabled by default, so
                  all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                  <code>&lt;MDBDataTable striped /&gt;</code>.
                  </CardSubtitle> */}

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
