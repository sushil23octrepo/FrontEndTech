
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

function Nestedobjects() {

    const initialValues = {
        name: 'Sushil',
        email: '',
        channel: '',
        comments: '',
        address: '',
        social: {
            facebook: '',
            twitter: ''
        }
    }


    const onSubmit = (values) => { 
        console.log('Submit click', values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().required("required").email("enter valid email"),
        channel: Yup.string().required("Required")

    })

    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
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
                    <ErrorMessage name='channel' />
                </div>

                <div className='form-control'>
                    <label htmlFor='address' >Adress</label>
                    <Field name='address'>
                        {
                            (props) => {
                                const { Field, Form, meta } = props

                                return (
                                    <div>
                                        <input type="text" {...Field} id='address' />
                                        {meta.touched && meta.error ? (<div>{meta.error}</div>) : null}
                                    </div>
                                )
                            }}

                    </Field>
                </div>

                <div>
                    <label htmlFor='facebook'></label>
                    <Field type='text' name='social.facebook' id='facebook'/>
                </div>

                <div>
                    <label htmlFor='twitter'></label>
                    <Field type='text' name='social.twitter' id='twitter'/>
                </div>
                <button type='submit'>Submit</button>

            </Form>
        </Formik>
    )
}

export default Nestedobjects