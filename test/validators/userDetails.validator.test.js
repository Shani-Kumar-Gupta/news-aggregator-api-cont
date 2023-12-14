const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
// const usersDetails = require('../../src/db/users.json');
const UserDetailsValidator = require('../../src/validators/userDetails.validator');

chai.use(chaiHttp);

describe('Validate User Details Request Details', function () {
  let userDetail;
  beforeEach((done) => {
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
  it('1. Validate Login Request Info: User login information validated successfully', (done) => {
    done();
  });

  it('2. Validate Login Request Info: User login information validation failed', (done) => {
    done();
  });

  it('3. Validate Login Request Info: User email already registed to login succesfully', (done) => {
    done();
  });

  it('4. Validate Login Request Info: User email verification failed to login', (done) => {
    done();
  });

  it('5. Validate Login Request Info: User password verification successful', (done) => {
    done();
  });

  it('6. Validate Login Request Info: User password verification failed', (done) => {
    done();
  });
});
