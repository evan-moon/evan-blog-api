import database from '../utils/database';
import { Request, Response } from 'firebase-functions';

export const incrementViewCount = async (req: Request, res: Response) => {
  const postSlug: string = req.params.slug;

  if (postSlug == null) {
    res.status(400).send({
      msg: 'Missing post slug',
    });
    return;
  }

  const ref = database.ref('views').child(postSlug);

  try {
    const { snapshot } = await ref.transaction(currentViews => {
      if (currentViews == null) {
        return 0;
      } else {
        return currentViews + 1;
      }
    });
    res.send({
      total: snapshot?.val() ?? -1,
    });
  } catch (e) {
    res.status(500).send();
  }
};
