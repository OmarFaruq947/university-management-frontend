"use client";

import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import Form from "@/components/Forms/Forms";
import UMBreadCrumb from "@/components/ui/UMBreadcrumb";
import { genderOptions } from "@/constrants/global";
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
      {/* 
      {
  "password": "123456",
  "admin": {
    "name": {
      "firstName": "Admin",
      "lastName": "5",
      "middleName": "Aunto"
    },
    "dateOfBirth": "12-12-1994",
    "gender": "male",
    "bloodGroup": "O+",
    "email": "admin_5@gmail.com",
    "contactNo": "admin_5",
    "emergencyContactNo": "01600000000",
    "presentAddress": "Dhaka",
    "permanentAddress": "Dhaka",
    "managementDepartment": "64cd44da02f799152d4d1ca5",
    "designation": "HR Manager",
    "profileImage": "limk"
  }
}
      */}
      <div className="">
        <Form submitHandler={onSubmit}>
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
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
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
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminCreatePage;
