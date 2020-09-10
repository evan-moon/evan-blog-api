import * as express from 'express';
import * as cors from 'cors';
import * as functions from 'firebase-functions';
import { incrementViewCount } from './controllers';

const app = express();
app.use(cors({ origin: true }));

app.put('/posts/:slug/views', incrementViewCount);

export const api = functions.https.onRequest(app);
