import { ITikTuk } from 'types';
import { callApi } from 'helpers';
import { ApiRoutes } from 'common';

class TikTuksService {
  public static async getMany({ limit }: { limit: number }): Promise<ITikTuk[]> {
    const tiktuks: ITikTuk[] = await callApi({
      endpoint: ApiRoutes.FEED,
      query: { limit },
    }).then((response) => response.json());

    return tiktuks;
  }
}

export default TikTuksService;
