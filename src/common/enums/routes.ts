const Routes = {
  TRENDING: '/',
  USERS: (nick?: string) => (nick ? `/users/${nick}` : '/users/:nick'),
  TAGS: (tag?: string) => (tag ? `/tags/${tag}` : '/tags/:tag'),
  ALL: '*',
};

export default Routes;
