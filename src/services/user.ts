import { ITikTuk } from 'types/tiktuk';
import { IUser } from 'types/user';
import { IFeed } from 'types/feed';
import { callApi } from 'helpers';
import { ApiRoutes } from 'common';
import USER_FEED from 'mocks/user-feed';

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
  }): Promise<IFeed> {
    const feed: IFeed = USER_FEED;
    // await callApi({
    //   endpoint: ApiRoutes.USER.FEED(nick),
    //   query: { limit },
    // }).then((response) => response.json());

    return feed;
  }
}

export default UsersService;
