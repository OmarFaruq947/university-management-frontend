"use client";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";

const GuardianInformation = () => {
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
              name="student.guardian.fatherName"
              size="large"
              label="Father Name"
              placeholder="Father Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.guardian.fatherOccupation"
              size="large"
              label="Father Occupation"
              placeholder="Father Occupation"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.guardian.fatherContactNo"
              size="large"
              label="Father Contact No"
              placeholder="Father Contact No"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.guardian.motherName"
              size="large"
              label="Mother Name"
              placeholder="Mother Name"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.guardian.motherOccupation"
              size="large"
              label="Mother Occupation"
              placeholder="Mother Occupation"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.guardian.motherContactNo"
              size="large"
              label="Mother Contact No"
              placeholder="Mother Contact No"
            />
          </Col>

          <Col span={12} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="student.guardian.address"
              label="Parent Address"
              placeholder="Parent Address"
              rows={3}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GuardianInformation;
