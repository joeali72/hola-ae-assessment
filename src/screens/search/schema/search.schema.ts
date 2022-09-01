import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  query: yup
    .string()
    .required('This Field is Required')
    .test(
      'len',
      'Text must be equal or more than 3',
      (val) => val?.length !== 1
    )
    .test(
      'len',
      'Text must be equal or more than 3',
      (val) => val?.length !== 2
    ),

  type: yup.string().required('This Field is Required'),
});
