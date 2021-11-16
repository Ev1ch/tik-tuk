import { ITikTuk, IUser } from 'types';
import { callApi } from 'helpers';
import { ApiRoutes } from 'common';

class UsersService {
  public static async getUser({ nick }: { nick: string }): Promise<IUser> {
    const user: IUser = await callApi({
      endpoint: ApiRoutes.USER.INFO(nick),
    }).then((response) => response.json());

    return user;
  }

  public static async getUserFeed({
    limit,
    nick,
  }: {
    limit: number;
    nick: string;
  }): Promise<ITikTuk[]> {
    const feed: ITikTuk[] = [];
    // await callApi({
    //   endpoint: ApiRoutes.USER.FEED(nick),
    //   query: { limit },
    // }).then((response) => response.json());

    return feed;
  }
}

export default UsersService;
