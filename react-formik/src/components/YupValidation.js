
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function YupValidation() {

    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }


    const onSubmit = values => {
        console.log('Submit click', values);
    }

    const validationSchema=Yup.object({
        name:Yup.string().required("Required"),
        email:Yup.string().required("required").email("enter valid email"),
        channel:Yup.string().required("Required")

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    console.log("Form Tourched", formik.touched)


    //    console.log('Form Values', formik.values);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name' >Name</label>
                    <input type='text' id='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' />
                    {formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                </div> 
                <div className='form-control'>
                    <label htmlFor='email' >E-mail</label>
                    <input type='text' id='email' onBlur={formik.handleBlur} name='email' onChange={formik.handleChange} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? 
                    (<div className='error'>{formik.errors.email}</div>) : null}
                </div>


                <div className='form-control'>
                    <label htmlFor='channel' >Channel</label>
                    <input type='text' id='channel' name='channel' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} />
                    {formik.touched.channel && formik.errors.channel ? 
                    (<div className='error'>{formik.errors.channel}</div>) : null}
                </div>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}

export default YupValidation