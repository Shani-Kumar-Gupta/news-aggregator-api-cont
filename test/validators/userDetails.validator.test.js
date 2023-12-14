const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
// const usersDetails = require('../../src/db/users.json');
const UserDetailsValidator = require('../../src/validators/userDetails.validator');
const logger = require('../../src/utils/logger.utils');

chai.use(chaiHttp);

describe('Validate User Details Request Details', function () {
  let userDetail;
  beforeEach((done) => {
    logger.info(
      'Initializing user details for each and every test case to validate registration'
    );
    userDetail = {
      userName: 'TestName',
      email: 'test@example.com',
      password: 'test@mypassword',
      role: 'admin',
    };
    done();
  });

  it('1. Validate User Details Request Details: user details validated successfully', (done) => {
    let response =
      UserDetailsValidator.validateUserDetailsRequestInfo(userDetail);
    expect(response.status).equal(true);
    expect(response.statusCode).equal(200);
    expect(response.message).equal('User details Validated successfully!');
    done();
  });

  it('2. Validate User Details Request Details: user details validation failed', (done) => {
    delete userDetail.role;
    let response =
      UserDetailsValidator.validateUserDetailsRequestInfo(userDetail);
    expect(response.status).equal(false);
    expect(response.statusCode).equal(400);
    expect(response.message).equal(
      'Invalid used details! Something is missing!'
    );
    done();
  });

  it('3. Validate User Details Request Details: unique username validation failed', (done) => {
    userDetail.userName = 'ShaniKGupta';
    let response =
      UserDetailsValidator.validateUserDetailsRequestInfo(userDetail);
    expect(response.status).equal(false);
    expect(response.statusCode).equal(403);
    expect(response.message).equal(
      'Username already in use. Please provide unique username!'
    );
    done();
  });

  it('4. Validate User Details Request Details: user email validation failed', (done) => {
    userDetail.email = 'test@@example.com';
    let response =
      UserDetailsValidator.validateUserDetailsRequestInfo(userDetail);
    expect(response.status).equal(false);
    expect(response.statusCode).equal(400);
    expect(response.message).equal(
      'Invalid email address! Please provide a valid email address'
    );
    done();
  });

  it('5. Validate User Details Request Details: user role validation failed', (done) => {
    userDetail.role = 'test';
    let response =
      UserDetailsValidator.validateUserDetailsRequestInfo(userDetail);
    expect(response.status).equal(false);
    expect(response.statusCode).equal(400);
    expect(response.message).equal(
      'Invalid user role. Please provide a valid role!'
    );
    done();
  });
});

describe('Validate Login Request Info', function () {
  let userDetail;
  beforeEach((done) => {
    logger.info(
      'Initializing user details for each and every test case to validate login request'
    );
    userDetail = {
      userName: 'ShaniKGupta',
      email: 'shani@gmail.com',
      password: 'shani@12345',
      role: 'admin',
    };
    done();
  });
  it('1. Validate Login Request Info: User login information validated successfully', (done) => {
    let response = UserDetailsValidator.validateLoginRequestInfo(userDetail);
    expect(response.status).equal(true);
    expect(response.statusCode).equal(200);
    expect(response.message).equal(
      'User email and password validated successfully!'
    );
    done();
  });

  it('2. Validate Login Request Info: User login information validation failed', (done) => {
    delete userDetail.email;
    let response = UserDetailsValidator.validateLoginRequestInfo(userDetail);
    expect(response.status).equal(false);
    expect(response.statusCode).equal(400);
    expect(response.message).equal(
      'Invalid user login information! Something is missing'
    );
    done();
  });

  it('3. Validate Login Request Info: User email verification failed to login', (done) => {
    userDetail.email = 'test@myemail.com';
    let response = UserDetailsValidator.validateLoginRequestInfo(userDetail);
    expect(response.status).equal(false);
    expect(response.statusCode).equal(404);
    expect(response.message).equal(
      `User not found with email ${userDetail.email}`
    );
    done();
  });

  it('5. Validate Login Request Info: User password verification failed', (done) => {
    userDetail.password = 'testmypassword';
    let response = UserDetailsValidator.validateLoginRequestInfo(userDetail);
    expect(response.status).equal(false);
    expect(response.statusCode).equal(401);
    expect(response.message).equal(
      `Invalid user password! Please provide correct password!`
    );
    done();
  });
});
