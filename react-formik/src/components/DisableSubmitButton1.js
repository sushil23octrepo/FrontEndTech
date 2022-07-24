
import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import { useState } from 'react'

function DisableSubmitButton1() {

    const [formValues, setformData] = useState(null)
    const initialValues = {
        name: 'Sushil',
        email: '',
        channel: '',
        comments: '',
        address: '',
        social: {
            facebook: '',
            twitter: ''
        },
        phoneNumbers: ['', ''],
        phNumbers: ['']
    }

    const savedValues = {
        name: 'Sushil',
        email: 's@example.com',
        channel: 'youtue',
        comments: 'test',
        address: 'dd',
        social: {
            facebook: 'fb',
            twitter: 'tw'
        },
        phoneNumbers: ['989', '345'],
        phNumbers: ['']
    }

    const handleLoadClick = () => {
        setformData(savedValues)
    }

    const onSubmit = (values, submitProps) => {
        console.log('Submit click', values);
        submitProps.setSubmitting(false);
        submitProps.resetForm()
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().required("required").email("enter valid email"),
        channel: Yup.string().required("Required"),
        comments: Yup.string().required("Required")

    })

    return (
        <Formik initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
            enableReinitialize
        // validateOnMount
        // validateOnBlur={false}
        >
            {
                formik => {
                    console.log('Formik', formik)
                    return (
                        <Form>
                            <div className='form-control'>
                                <label htmlFor='name' >Name</label>
                                <Field type='text' id='name' name='name' />
                                <ErrorMessage component={TextError} name='name' />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='email' >E-mail</label>
                                <Field type='text' id='email' name='email' />
                                <ErrorMessage name='email' />
                            </div>


                            <div className='form-control'>
                                <label htmlFor='channel' >Channel</label>
                                <Field type='text' id='channel' name='channel' />
                                <ErrorMessage name='channel' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='channel' >Comments</label>
                                <Field as='textarea' id='comments' name='comments' />
                                <ErrorMessage name='comments' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='address' >Adress</label>
                                <Field name='address'>
                                    {
                                        (props) => {
                                            const { field, Form, meta } = props

                                            return (
                                                <div>
                                                    <input type="text" {...field} id='address' />
                                                    {meta.touched && meta.error ? (<div>{meta.error}</div>) : null}
                                                </div>
                                            )
                                        }}

                                </Field>
                            </div>

                            <div>
                                <label htmlFor='facebook'>Facebook</label>
                                <Field type='text' name='social.facebook' id='facebook' />
                            </div>

                            <div>
                                <label htmlFor='twitter'>Twitter</label>
                                <Field type='text' name='social.twitter' id='twitter' />
                            </div>

                            <div>
                                <label htmlFor='primaryPhone'>Primary Number</label>
                                <Field type='text' name='phoneNumbers[0]' id='primaryPhone' />
                            </div>

                            <div>
                                <label htmlFor='secondaryPhone'>Secondary Number</label>
                                <Field type='text' name='phoneNumbers[1]' id='secondaryPhone' />
                            </div>

                            <div>
                                <label htmlFor='primaryPhone'>List of phone numbers</label>
                                <FieldArray name="phNumbers">
                                    {fieldArrayProps => {
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { phNumbers } = values
                                        return (
                                            <div>
                                                {
                                                    phNumbers.map((phNumber, index) => (
                                                        <div key={index}>
                                                            <Field name={`phNumbers[${index}]`} />
                                                            <button type='button' onClick={() => remove(index)}>-</button>
                                                            <button type='button' onClick={() => push('')}>+</button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                    }
                                </FieldArray>
                            </div>
                            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                            <button type='reset'>Reset</button>
                            <button type='button' onClick={handleLoadClick}>LoadSavedData</button>


                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default DisableSubmitButton1