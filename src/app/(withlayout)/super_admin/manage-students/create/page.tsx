"use client";
import StepperForm from "@/components/steperForm/StepperForm";
import GuardianInformation from "@/components/studentForms/GuardianInformation";
import LocalGuardianInformation from "@/components/studentForms/LocalGuardianInformation";
import StudentInfo from "@/components/studentForms/StudentInfo";
import StudentBasicInformation from "@/components/studentForms/studentBasicInformation";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInformation />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInformation />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInformation />,
    },
  ];

  //handle student submit data
  const handleStudentSubmit = async (data: any) => {
    try {
      console.log("student data ---->>", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "10px 10px 10px 0px" }}>
      <StepperForm
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      ></StepperForm>
    </div>
  );
};

export default CreateStudentPage;
