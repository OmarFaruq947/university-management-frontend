"use client";

import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const LocalGuardianInformation = () => {
  return (
    <div
      style={{
        border: "2px dashed #fff",
        borderRadius: "5px",
        padding: "15px",
        margin: "10px 0px",
      }}
    >
      <div className="">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.localGuardian.name"
              size="large"
              label="Local Guardian Name"
              placeholder="Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.localGuardian.occupation"
              size="large"
              label="Local Guardian Occupation"
              placeholder="Occupation"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.localGuardian.contactNo"
              size="large"
              label="Local Guardian Contact No"
              placeholder="Contact No"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.localGuardian.address"
              size="large"
              label="Local Guardian Address"
              placeholder="Address"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LocalGuardianInformation;
