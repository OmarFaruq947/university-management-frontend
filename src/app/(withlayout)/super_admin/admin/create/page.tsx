"use client";

import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import Form from "@/components/Forms/Forms";
import UMBreadCrumb from "@/components/ui/UMBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroupOptions,
  departmentOptions,
  designationOptions,
  genderOptions,
} from "@/constrants/global";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";

const AdminCreatePage = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
    alert(data);
    try {
      // do something
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h2 style={{ marginBottom: "10px" }}>Admin create page</h2>

      <div className="">
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          {/* Admin information */}
          <div
            style={{
              border: "2px solid #fff",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 10px 10px 0px",
            }}
          >
            <span style={{ fontSize: "18px", marginBottom: "10px" }}>
              Admin Information
            </span>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                  placeholder="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                  placeholder="Middle Name"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                  placeholder="Last Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="admin.password"
                  size="large"
                  label="Password"
                  placeholder="Password"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="admin.gender"
                  size="large"
                  label="Gender"
                  options={genderOptions}
                  defaultValue="Gender"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="admin.managementDepartment"
                  size="large"
                  label="Department"
                  options={departmentOptions}
                  defaultValue="Department"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email"
                  placeholder="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelectField
                  name="admin.designation"
                  size="large"
                  label="designation"
                  options={designationOptions}
                  defaultValue="Designation"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <UploadImage />
              </Col>
            </Row>
          </div>

          {/* Basic Information */}

          <div
            style={{
              border: "2px solid #fff",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 10px 10px 0px",
            }}
          >
            <span style={{ fontSize: "18px", marginBottom: "10px" }}>
              Basic Information
            </span>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row mb-4" span={8}>
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No"
                  placeholder="Contact No"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No"
                  placeholder="Emergency Contact No"
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present address"
                  rows={3}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={3}
                />
              </Col>

              <Col className="gutter-row mb-4" span={8}>
                <FormSelectField
                  size="large"
                  name="admin.bloodGroup"
                  options={bloodGroupOptions}
                  label="Blood group"
                  placeholder="Select"
                />
              </Col>
            </Row>
          </div>
          <div
            style={{
              margin: "10px 0px 20px 0px",
            }}
          >
            <Button htmlType="submit" type="primary">
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AdminCreatePage;
