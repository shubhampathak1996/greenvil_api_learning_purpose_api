import request from 'supertest';
import { app } from '../../../app';

it('fails when a email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/login')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
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
    .post('/api/users/login')
    .send({
      email: 'test@test.com',
      password: 'password1',
      first_name: 'First Name',
      last_name: 'Last Name',
      phone: 1234567890,
      nationality: 'India',
      country_code: '+91',
    })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
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

  const response = await request(app)
    .post('/api/users/login')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
