
import React from 'react'
import { useFormik } from 'formik'

function YoutubeFrom() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''

        },
        onSubmit: values => {
            console.log('Submit click', values);
        }
    });

//    console.log('Form Values', formik.values);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name' >Name</label>
                <input type='text' id='name' onChange={formik.handleChange} value={formik.values.name} name='name' />

                <label htmlFor='email' >E-mail</label>
                <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='channel' >Channel</label>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeFrom