"use client";
import {
  academicDepartmentOptions,
  academicSemesterOptions,
  bloodGroupOptions,
  facultyOptions,
} from "@/constrants/global";
import { Col, Row } from "antd";
import FormDatePicker from "../Forms/FormDatePicker";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import FormTextArea from "../Forms/FormTextArea";

const StudentBasicInformation = () => {
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
          <Col className="gutter-row mb-4" span={6}>
            <FormDatePicker
              name="student.dateOfBirth"
              label="Date of birth"
              size="large"
            />
          </Col>

          <Col className="gutter-row mb-4" span={6}>
            <FormSelectField
              size="large"
              name="student.bloodGroup"
              options={bloodGroupOptions}
              label="Blood group"
              placeholder="Select"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.contactNo"
              size="large"
              label="Contact No"
              placeholder="Contact No"
            />
          </Col>

          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.emergencyContactNo"
              size="large"
              label="Emergency Contact No"
              placeholder="Emergency Contact No"
            />
          </Col>

          <Col className="gutter-row mb-4" span={6}>
            <FormSelectField
              size="large"
              name="student.academicFaculty"
              options={facultyOptions}
              label="Academic Faculty"
              placeholder="Select"
            />
          </Col>
          <Col className="gutter-row mb-4" span={6}>
            <FormSelectField
              size="large"
              name="student.academicDepartment"
              options={academicDepartmentOptions}
              label="Academic Department"
              placeholder="Select"
            />
          </Col>

          <Col className="gutter-row mb-4" span={6}>
            <FormSelectField
              size="large"
              name="student.academicSemester"
              options={academicSemesterOptions}
              label="Academic Semester"
              placeholder="Select"
            />
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="student.presentAddress"
              label="Present address"
              placeholder="present Address"
              rows={3}
            />
          </Col>

          <Col span={12} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="student.permanentAddress"
              label="Permanent Address"
              placeholder="permanent Address"
              rows={3}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentBasicInformation;
