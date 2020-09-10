import * as admin from 'firebase-admin';
import { project_id, private_key, client_email } from '../service-account.json';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: project_id,
    privateKey: private_key,
    clientEmail: client_email,
  }),
  databaseURL: 'https://evan-250412.firebaseio.com/',
});

export default admin.database();
