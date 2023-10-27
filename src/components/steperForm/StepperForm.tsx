"use client";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { Button, Steps, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  submitHandler: (el: any) => void; // concept not clear way arrow function and way void
  navigateLink?: string;
}

// from data maintain in local storage (start)
const StepperForm = ({ steps, submitHandler, navigateLink }: IStepsProps) => {
  const route = useRouter();
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );

  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);

  // from data maintain in local storage (start)

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
  // console.log("methods....>>", methods);
  const { handleSubmit, reset } = methods;
  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setToLocalStorage("step", JSON.stringify({ step: 0 })); // if from submit is done, than zero(0) set to local storage
    navigateLink && route.push(navigateLink);
  };

  return (
    <>
      <p className="stepsHeading">Create Student</p>

      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
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
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Submit
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
