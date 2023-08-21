import request from 'supertest';
import { app } from '../../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
      first_name: 'Nishant',
      last_name: 'Tripathi',
      phone: 8447571177,
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: '1',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
      confirm_password: '1',
    })
    .expect(400);
});
it('returns a 400 on invalid phone', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 'phonenumber',
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(400);
});

it('returns a 400 on invalid nationality', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 'phonenumber',
      nationality: 'Testing',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(400);
});
it('returns a 400 on invalid country code', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 'phonenumber',
      nationality: 'India',
      country_code: 'Testing',
      confirm_password: 'password',
    })
    .expect(400);
});

it('returns a 400 with missing required field', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
    })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',

      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
    })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'password',

      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
    })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'password',
      first_name: 'First Name',

      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
    })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',

      nationality: 'India',
      country_code: '+91',
    })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,

      country_code: '+91',
    })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
    })

    .expect(400);
});

it('return 400 if password and confirm password are not same', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password1',
    })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 9191928282,
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(400);
});

it('disallows duplicate phone', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test2@test.com',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
      confirm_password: 'password',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
