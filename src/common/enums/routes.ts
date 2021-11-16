const Routes = {
  HOME: '/',
  USERS: (nick?: string) => (nick ? `/users/${nick}` : '/users/:nick'),
  TAGS: (tag?: string) => (tag ? `/tags/${tag}` : '/tags/:tag'),
};

export default Routes;
