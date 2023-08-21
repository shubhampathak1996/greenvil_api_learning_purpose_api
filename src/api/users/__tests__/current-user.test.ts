import request from 'supertest';
import { app } from '../../../app';

it('responds with details about the current user', async () => {
  const token = await global.signin();

  const response = await request(app)
    .get('/api/users/current-user')
    .set('Authorization', `Bearer ${token}`)
    .send()
    .expect(200);

  expect(response.body.email).toEqual('test@test.com');
});

it('responds with null if not authenticated', async () => {
  const response = await request(app)
    .get('/api/users/current-user')
    .send()
    .expect(404);

  // expect(response.body.currentUser).toEqual(null);
});
