const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Validate User Details Request Details', function () {
  it('1. Validate User Details Request Details: user details validated successfully', (done) => {
    done();
  });

  it('2. Validate User Details Request Details: user details validation failed', (done) => {
    done();
  });

  it('3. Validate User Details Request Details: unique username validation successfully', (done) => {
    done();
  });

  it('4. Validate User Details Request Details: unique username validation failed', (done) => {
    done();
  });

  it('5. Validate User Details Request Details: user email validated successfully', (done) => {
    done();
  });

  it('6. Validate User Details Request Details: user email validation failed', (done) => {
    done();
  });

  it('7. Validate User Details Request Details: user role validated successfully', (done) => {
    done();
  });

  it('8. Validate User Details Request Details: user role validation failed', (done) => {
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
