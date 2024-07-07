// import PropTypes from 'prop-types'
// import React, { useEffect } from "react"

// import { Row, Col, Alert, Container } from "reactstrap"

// // Redux
// import { connect } from "react-redux"
// import { withRouter, Link } from "react-router-dom"

// // availity-reactstrap-validation
// import { AvForm, AvField } from "availity-reactstrap-validation"

// // actions
// import { loginUser, apiError, socialLogin } from "../../store/actions"

// // import images
// import logo from "../../assets/images/logo-sm-dark.png"

// const Login = (props) => {
//   useEffect(() => {
//     document.body.className = "authentication-bg";
//     // remove classname when component will unmount
//     return function cleanup() {
//       document.body.className = "";
//     };
//   });

//   // handleValidSubmit
//   const handleValidSubmit = (event, values) => {
//     props.loginUser(values, props.history)
//   }

//   return (
//     <React.Fragment>
//       <div className="home-btn d-none d-sm-block">
//         <Link to="/" className="text-dark">
//           <i className="fas fa-home h2" />
//         </Link>
//       </div>
//       <div className="account-pages my-5 pt-sm-5">
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8} lg={6} xl={5}>
//               <div className="card overflow-hidden">
//                 <div className="bg-login text-center">
//                   <div className="bg-login-overlay"></div>
//                   <div className="position-relative">
//                     <h5 className="text-white font-size-20">Welcome Back !</h5>
//                     <p className="text-white-50 mb-0">Sign in to continue to Qovex.</p>
//                     <Link to="/" className="logo logo-admin mt-4">
//                       <img src={logo} alt="" height="30" />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="card-body pt-5">
//                   <div className="p-2">
//                     <AvForm
//                       className="form-horizontal"
//                       onValidSubmit={(e, v) => {
//                         handleValidSubmit(e, v)
//                       }}
//                     >
//                       {props.error && typeof props.error === "string" ? (
//                         <Alert color="danger">{props.error}</Alert>
//                       ) : null}

//                       <div className="mb-3">
//                         <AvField
//                           name="email"
//                           label="Email"
//                           value="admin@themesbrand.com"
//                           className="form-control"
//                           placeholder="Enter email"
//                           type="email"
//                           required
//                         />
//                       </div>

//                       <div className="mb-3">
//                         <AvField
//                           name="password"
//                           label="Password"
//                           value="123456"
//                           type="password"
//                           required
//                           placeholder="Enter Password"
//                         />
//                       </div>

//                       <div className="form-check">
//                         <input
//                           type="checkbox"
//                           className="form-check-input"
//                           id="customControlInline"
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor="customControlInline"
//                         >
//                           Remember me
//                         </label>
//                       </div>

//                       <div className="mt-3">
//                         <button
//                           className="btn btn-primary w-100 waves-effect waves-light"
//                           type="submit"
//                         >
//                           Log In
//                         </button>
//                       </div>

//                       <div className="mt-4 text-center">
//                         <Link to="/page-recoverpw" className="text-muted"><i
//                           className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
//                       </div>
//                     </AvForm>

//                   </div>
//                 </div>
//               </div>
//               <div className="mt-5 text-center">
//                 <p>Don't have an account ? <Link to="/pages-register"
//                   className="fw-medium text-primary"> Signup now </Link> </p>
//                 <p>© {new Date().getFullYear()} Qovex. Crafted with <i
//                   className="mdi mdi-heart text-danger"></i> by Themesbrand
//                         </p>
//               </div>
//             </Col>
//           </Row>

//         </Container>
//       </div>
//     </React.Fragment>
//   )
// }

// const mapStateToProps = state => {
//   const { error } = state.Login
//   return { error }
// }

// export default withRouter(
//   connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
// )

// Login.propTypes = {
//   error: PropTypes.any,
//   history: PropTypes.object,
//   loginUser: PropTypes.func,
//   socialLogin: PropTypes.func
// }

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row, Col, Alert, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { loginUser, apiError } from '../../store/actions';
import { withRouter, Link } from "react-router-dom"

import logo from '../../assets/images/logo-sm-dark.png';

const Login = (props) => {
  useEffect(() => {
    document.body.className = 'authentication-bg';
    return function cleanup() {
      document.body.className = '';
    };
  });

  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    const { employee_id, password } = values;
    
    const staticData = [
      { "employee_id": 1, "name": "Siva", "username": "siva", "password": "123" },
      { "employee_id": 2, "name": "Surya", "username": "surya", "password": "123" },
      { "employee_id": 3, "name": "Gopal", "username": "gopal", "password": "123" },
      { "employee_id": 4, "name": "Mouli", "username": "mouli", "password": "123" },
      { "employee_id": 5, "name": "Vijay", "username": "vijay", "password": "123" },
      { "employee_id": 6, "name": "Vardhan", "username": "vardhan", "password": "123" },
      { "employee_id": 7, "name": "Ravi", "username": "ravi", "password": "123" },
      { "employee_id": 8, "name": "Raju", "username": "raju", "password": "123" },
      { "employee_id": 9, "name": "Kavi", "username": "kavi", "password": "123" },
    ];
    
    // Check if entered credentials match static data
    const user = staticData.find(user => user.employee_id === parseInt(employee_id) && user.password === password);
    if (user) {
      // If credentials match, login user
      props.loginUser(user);
      localStorage.setItem('employee_id',user.employee_id);
      props.history.push('/dashboard'); // Redirect to the dashboard
    } else {
      // If credentials don't match, display error
      props.apiError("Invalid credentials");
    }
  };

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back!</h5>
                    <p className="text-white-50 mb-0">Sign in to continue </p>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={handleValidSubmit}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="employee_id"
                          label="Employee ID"
                          type="text"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                    </AvForm>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  const { error } = state.Login;
  return { error };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError })(Login)
);

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func
};
