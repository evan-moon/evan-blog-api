import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({ path: join(__dirname, '../../../.env') });

const cert = {
  projectId: process.env.PROJECT_ID,
  privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.CLIENT_EMAIL,
};
admin.initializeApp({
  credential: admin.credential.cert(cert),
  databaseURL: 'https://evan-250412.firebaseio.com/',
});

export default admin.database();
