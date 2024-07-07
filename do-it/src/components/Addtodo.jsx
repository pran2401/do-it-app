import React from 'react'
import { useEffect, useState,useContext } from 'react'
import {useParams} from 'react-router-dom'
import { AuthContext } from '../context/auth';
import { addTodoApi,updateApi } from '../todoapi/Apitodo'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useNavigate} from 'react-router-dom'
import moment from 'moment'

function Addtodo() {
    const {id} = useParams()
    const[description, setDescription] = useState('')
    const[targetDate, setTargetDate] = useState('')
    const navigate = useNavigate()

    const authContext = useContext(AuthContext)
    
    const username = authContext.username
    
    
   
    function onSubmit(values) {
        console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            date: values.targetDate,
            done: false
        }
        
        console.log(todo)

        addTodoApi(username, todo)
        .then(response => {
            navigate('/todos')
        })
        .catch(error => console.log(error))
    }
    function validate(values) {
        let errors = {
            // description: 'Enter a valid description',
            // targetDate: 'Enter a valid target date'
        }

        if(values.description.length<5) {
            errors.description = 'Enter atleast 5 characters'
        }

        if(values.targetDate == null || values.targetDate=='' || !moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a target date'
        }

        console.log(values)
        return errors
    }
    
    return (
        <div className="container">
            <h1>Enter Todo Details </h1>
            <div>
                <Formik initialValues={ { description, targetDate } } 
                    enableReinitialize = {true}
                    onSubmit = {onSubmit}
                    validate = {validate}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name="description"
                                component="div"
                                className = "alert alert-warning"
                            />
                            
                            <ErrorMessage 
                                name="targetDate"
                                component="div"
                                className = "alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>

        </div>
    )
}

export default Addtodo