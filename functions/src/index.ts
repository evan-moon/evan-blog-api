import * as express from 'express';
import * as cors from 'cors';
import * as functions from 'firebase-functions';
import { incrementViewCount } from './controllers';

const app = express();
app.use(cors({ origin: true }));

app.get('/ping', (_, res) => res.send(200));
app.put('/posts/:slug/views', incrementViewCount);

export const api = functions.https.onRequest(app);
