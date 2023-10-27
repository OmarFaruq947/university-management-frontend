import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("first name is required !"),
      lastName: yup.string().required("last Name is required !"),
      middleName: yup.string().required("middle Name is required !"),
    }),

    email: yup.string().email().required("email is required !"),
    designation: yup.string().required("designation is required !"),
    gender: yup.string().required("Gender is required"),
    dateOfBirth: yup.string().required("date of birth is required !"),
  }),
});

// {
//     "password": "123456",
//     "admin": {
//       "dateOfBirth": "12-12-1994",
//       "gender": "male",
//       "bloodGroup": "O+",
//       "email": "admin_5@gmail.com",
//       "contactNo": "admin_5",
//       "emergencyContactNo": "01600000000",
//       "presentAddress": "Dhaka",
//       "permanentAddress": "Dhaka",
//       "managementDepartment": "64cd44da02f799152d4d1ca5",
//       "designation": "HR Manager",
//       "profileImage": "limk"
//     }
//   }
