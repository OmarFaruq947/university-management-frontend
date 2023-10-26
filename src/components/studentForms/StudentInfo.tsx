"use client";
import {
  bloodGroupOptions,
  departmentOptions,
  designationOptions,
  genderOptions,
} from "@/constrants/global";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import FormTextArea from "../Forms/FormTextArea";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
  return (
    <>
      <h2>.....Student core information......</h2>
      <div className="">
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
              type="text"
              name="student.email"
              size="large"
              label="Last Name"
              placeholder="Last Name"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="password"
              name="student.password"
              size="large"
              label="Password"
              placeholder="Password"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="admin.gender"
              size="large"
              label="Gender"
              options={genderOptions}
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <UploadImage />
          </Col>
        </Row>
      </div>

      <h2>....Student basic information ....</h2>
      <div className="">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="admin.managementDepartment"
              size="large"
              label="Department"
              options={departmentOptions}
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="email"
              name="admin.email"
              size="large"
              label="Email"
              placeholder="Email"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormSelectField
              name="admin.designation"
              size="large"
              label="designation"
              options={designationOptions}
            />
          </Col>
          <Col className="gutter-row mb-4" span={6}>
            <FormSelectField
              size="large"
              name="admin.bloodGroup"
              options={bloodGroupOptions}
              label="Blood group"
              placeholder="Select"
            />
          </Col>

          <Col span={6} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="admin.presentAddress"
              label="Present address"
              rows={3}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StudentInfo;
