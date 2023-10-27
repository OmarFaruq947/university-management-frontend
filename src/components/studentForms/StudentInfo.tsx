"use client";
import { genderOptions } from "@/constrants/global";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
  return (
    <div
      style={{
        border: "2px dashed #fff",
        borderRadius: "5px",
        padding: "15px",
        margin: "10px 0px",
      }}
    >
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.firstName"
              size="large"
              label="First Name"
              placeholder="First Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.middleName"
              size="large"
              label="Middle Name"
              placeholder="Middle Name"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.lastName"
              size="large"
              label="Last Name"
              placeholder="Last Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="email"
              name="student.email"
              size="large"
              label="Email"
              placeholder="Email"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
              placeholder="Password"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="student.gender"
              size="large"
              label="Gender"
              options={genderOptions}
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <UploadImage />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
