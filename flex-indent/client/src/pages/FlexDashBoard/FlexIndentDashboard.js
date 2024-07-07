import React, { useState } from "react";
import Select from "react-select";
import {
    Card,
    CardBody,
    Col,
    Row,
    CardTitle,
  } from "reactstrap"
  import Breadcrumbs from "../../components/Common/Breadcrumb"
  import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"


  const optionGroup = [
    {
      label: "Colleges",
      options: [
        { label: "Aditya Engineering College(A)", value: "Aditya Engineering College(A)" },
        { label: "Aditya College Of Engineering and Technology(A)", value: "Aditya College Of Engineering and Technology(A)" },
        { label: "Aditya College Of Engineering(A)", value: "Aditya College Of Engineering(A)" },
        { label: "Aditya Polytechnic colleges(A)", value: "Aditya Polytechnic colleges(A)" },
        { label: "Aditya Pharmacy College (A)", value: "Aditya Pharmacy College (A)" },
        { label: "Aditya College of Pharmacy (A)", value: "Aditya College of Pharmacy (A)" },
        { label: "Aditya Global Business School", value: "Aditya Global Business School" },
        { label: "Aditya Degree and PG College", value: "Aditya Degree and PG College" },
        { label: "Technical Hub", value: "Technical Hub" },
      ],
    },
  ];
  
const FlexIndentDashboard = () => {
  const [selectedGroup, setselectedGroup] = useState(null);
  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }
  return (
    <React.Fragment>
        <div className='page-content'>
            <Breadcrumbs title="Charts" breadcrumbItem="Apex charts" />
            <Row>
              
              <card>
                <CardBody>
                <h4 className="card-title">Select College:</h4>
                <form>
                  <div className='mb-3'>
                    
                    <Select
                    value={selectedGroup}
                    onChange={() => {
                      handleSelectGroup();
                    }}
                    options={optionGroup}
                    classNamePrefix="select2-selection"
                  />
                  </div>
                </form>
                </CardBody>
              </card>
              
            </Row>
            <Row>
                <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4"> Column Chart </CardTitle>
                    <Apaexlinecolumn />
                </CardBody>
                </Card>
            </Row>
        </div>
    </React.Fragment>
  )
}

export default FlexIndentDashboard