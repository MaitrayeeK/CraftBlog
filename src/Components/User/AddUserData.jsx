import React from 'react'
import Layout from '../Layout/Layout'

const AddUserData = () => {
    return (
        <>
            <Layout>
                <div className='cb_login'>
                    <div className="cb_login-content card">
                        <div className="cb_login-content_title">
                            <h1>Complete profile</h1>
                        </div>
                        <div className="cb_login-content_form">
                            <form>
                                <input type="text" name="first_name" id="" placeholder='First name' required />
                                <input type="text" name="last_name" id="" placeholder='Last name' required />
                                <input type="text" name="user_name" id="" placeholder='Username' required />
                                <input type="text" name="mobile_no" id="" placeholder='Mobile no' required />
                                <textarea name="bio" id="" cols="30" rows="10"></textarea>
                                <p>
                                    Stay Anonymous ?
                                    <div class="checkbox-wrapper-5">
                                        <div class="check">
                                            <input id="check-5" type="checkbox" />
                                            <label for="check-5"></label>
                                        </div>
                                    </div>
                                </p>
                            </form>
                        </div>
                        <div className="cb_login-content_signup">
                            <p>Already have an account? <a href="#">Login</a></p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default AddUserData