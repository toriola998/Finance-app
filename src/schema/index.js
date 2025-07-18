import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
import DOMPurify from 'dompurify'
const sanitize = (value) => DOMPurify.sanitize(value.trim())

const loginSchema = yup.object().shape({
   username: yup.string().required("Can't be empty").transform(sanitize),
   password: yup
      .string()
      .min(8, 'Must be least 8 characters')
      .matches(passwordRules, { message: 'Please create a stronger password' })
      .required("Can't be empty")
      .transform(sanitize),
})

const addNewPotSchema = yup.object().shape({
   potName: yup.string().required("Can't be empty").transform(sanitize),
   target: yup.string().required("Can't be empty").transform(sanitize),
   //theme: yup.object().required("Can't be empty").transform(sanitize),
   // theme: yup
   //  .object({
   //    label: yup.string().required('Theme is required'),
   //    color: yup.string(),
   //  })
   //  .nullable()
   //  .required('Theme is required')
})

const addNewBudgetSchema = yup.object().shape({
   maximumSpend: yup.string().required("Can't be empty").transform(sanitize),
})

const schemas = {
   loginSchema,
   addNewPotSchema,
   addNewBudgetSchema,
}

export default schemas
