const ApiRoutes = {
  FEED: '/trending/feed',
  USER: {
    INFO: (nick: string) => `/user/info/${nick}`,
    FEED: (nick: string) => `/user/feed/${nick}`,
  },
};

export default ApiRoutes;
