const Routes = {
  HOME: '/',
  USERS: (username?: string) => (username ? `/users/${username}` : '/users/:username'),
  TAGS: (tag?: string) => (tag ? `/tags/${tag}` : '/tags/:tag'),
};

export default Routes;
