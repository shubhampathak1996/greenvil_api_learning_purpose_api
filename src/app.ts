import express from 'express';
import 'express-async-errors';
import path from 'path';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError, currentUser } from './config';
import cors from 'cors';
// import { UserRouter } from './api/users/UserRoutes';
import { UserRouter } from './api/users/userRoutes';
import { Routes } from './domain/enums/RoutesEnum';
import morgan from 'morgan';
import { uploadRouter } from './services/uploads';
import { EmployeeRouter } from './api/employees/EmployeeRoutes';
import { BannerRouter } from './api/banners/BannerRoutes';
import { TestimonialRouter } from './api/testimonials/TestimonialRoutes';
import { ContactRouter } from './api/contact/ContactRoutes';
import { CategoryRouter } from './api/category/CategoryRoutes';
import { ProductRouter } from './api/products/ProductRoutes';

const app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(currentUser);
app.use(Routes.USER_ROUTE, UserRouter);
app.use(Routes.EMPLOYEE_ROUTE, EmployeeRouter);
app.use(Routes.BANNER_ROUTE, BannerRouter);
app.use(Routes.TESTIMONIAL_ROUTE, TestimonialRouter);
app.use(Routes.CONTACT_ROUTE, ContactRouter);
app.use(Routes.CATEGORY_ROUTE, CategoryRouter);
app.use(Routes.PRODUCT_ROUTE, ProductRouter);
app.use(Routes.UPLOAD, uploadRouter);

const _dirname = path.resolve();
app.use('/uploads', express.static(path.join(_dirname, '/uploads')));

app.all('*', async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);
export { app };
