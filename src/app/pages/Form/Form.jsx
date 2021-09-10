import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "@babel/polyfill";

//services
import { courseService } from '../../virtual-services/Courses/courses.service';

// styling
import './Form.scss';
import '../../App.scss';

// components
import { Toaster } from './components/toaster-notification/Toaster';
import { Button } from '@atoms/Buttons';
import { FormDescription } from './components/form-description/FormDescription';
import ReCAPTCHA from 'react-google-recaptcha';

export const Form = () => {
    const [registerResponse, setRegisterResponse] = useState({});
    const [validated, setValidated] = useState(false);
    const recaptchaRef = React.createRef();

    const onChange = (value) => {
        if (value) {
            setValidated(true);
        }
    }

    return (
        <div id="form-parent-container">
            <div className="form-description-section">
                <div className="form-description-background tw-bg-red-400 tw-pt-32">
                    <FormDescription />
                </div>
            </div>
            <div className="form-content tw-pt-48 tw-pl-8">
                <Formik
                    validateOnChange={false}
                    validateOnBlur={false}
                    initialValues={{ subjectCode: '', subjectNumber: '', sectionNumber: '', user: '' }}
                    validate={values => {
                        const errors = {};
                        if (!validated) {
                            errors.user = 'Must pass CAPTCHA test'
                        }
                        setValidated(false);
                        recaptchaRef.current.reset();
                        return errors
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true);
                        const response = await courseService.postCourse(values)
                        setRegisterResponse(response);
                        Toaster.show(response);
                        setSubmitting(false)
                        setValidated(false);
                        recaptchaRef.current.reset();
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <div className='input-field-container'>
                            <form className='tw-flex tw-flex-col' onSubmit={handleSubmit}>
                                <h3 className="form-title fadein tw-text-4xl tw-text-red-400">Course Information</h3>
                                <div className="fadeInUp">
                                    <input
                                        className="tw-font-thin tw-border-b-2 tw-border-solid tw-border-red-400 tw-h-12 tw-p-4 tw-outline-none"
                                        placeholder="Subject Code"
                                        type="subjectCode"
                                        name="subjectCode"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.subjectCode.toUpperCase().replace(/\s+/g, '')}
                                        pattern="[A-Za-z]{3,4}"
                                        required
                                    />
                                    <input
                                        className="tw-font-thin tw-border-b-2 tw-border-solid tw-border-red-400 tw-h-12 tw-p-4 tw-outline-none"
                                        placeholder="Subject Number"
                                        type="subjectNumber"
                                        name="subjectNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.subjectNumber.toUpperCase().replace(/\s+/g, '')}
                                        pattern="[a-zA-Z0-9]+"
                                        required
                                    />
                                    <input
                                        className="tw-font-thin tw-border-b-2 tw-border-solid tw-border-red-400 tw-h-12 tw-p-4 tw-outline-none"
                                        placeholder='Section Number'
                                        type="sectionNumber"
                                        name="sectionNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sectionNumber.toUpperCase().replace(/\s+/g, '')}
                                        required
                                    />
                                    <div className="tw-mt-8 tw-mb-4">

                                        <h3 className="form-title fadein tw-text-4xl tw-text-red-400" style={{ marginTop: '50px' }}>Phone Number</h3>
                                        <h4 className="tw-text-base tw-font-thin tw-text-gray">At this time, we only accept Canadian and American numbers</h4>
                                        <span>+1</span>
                                        < input
                                            className="tw-font-thin tw-border-b-2 tw-border-solid tw-border-red-400 tw-h-12 tw-p-4 tw-outline-none"
                                            placeholder='Phone Number'
                                            type="tel"
                                            name="user"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.user}
                                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-submission-section tw-flex tw-flex-row">
                                    <ReCAPTCHA className=""
                                        ref={recaptchaRef}
                                        // size='normal'
                                        sitekey="6LclIy0aAAAAAMeeKT6KtYujxV7tQttlFDiZxBxW"
                                        onChange={onChange}
                                    />
                                    <Button className='tw-bg-red-400 tw-h-[75px] tw-w-[150px]' disabled={isSubmitting} type='submit' className='fadeInUp' label='SUBMIT' />
                                </div>
                                <div className="tw-text-red-500">
                                    <ErrorMessage name="user" />
                                </div>
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        </div >
    )
}