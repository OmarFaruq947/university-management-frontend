"use client";
import { Button, Form, message, Steps } from "antd";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

// {
//   "password": "123456",
//   "student": {
//     "name": {
//       "firstName": "Fahim",
//       "lastName": "Uddin",
//       "middleName": "Bhai"
//     },
//     "dateOfBirth": "11-01-1999",
//     "gender": "male",
//     "bloodGroup": "O+",
//     "email": "student_111@gmail.com",
//     "contactNo": "student_222",
//     "emergencyContactNo": "0560190000",
//     "presentAddress": "Dhaka",
//     "permanentAddress": "Dhaka",
//     "academicFaculty": "d367b21a-a593-40ac-8ee0-cee0dfd0f724",
//     "academicDepartment": "fb6e91f0-9f20-4131-b9a9-eb2fad77526c",
//     "academicSemester": "000a766f-5e9a-4c46-9e5f-81f3f8a27abc",
//     "guardian": {
//       "fatherName": "MD. Akkas Ali",
//       "fatherOccupation": "Businessman",
//       "fatherContactNo": "0160099000",
//       "motherName": "Mrs. Anjumanara Begum",
//       "motherOccupation": "Housewife",
//       "motherContactNo": "0160680000",
//       "address": "Dhaka"
//     },
//     "localGuardian": {
//       "name": "Zahid Hasan",
//       "occupation": "Service Holder",
//       "contactNo": "01600900000",
//       "address": "Dhaka"
//     },
//     "profileImage": "image linkk"
//   }
// }

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps?: ISteps[];
}

const StepperForm = ({ steps }: IStepsProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item: any) => ({
    key: item.title,
    title: item.title,
  }));

  const methods = useForm();

  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <Form>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
