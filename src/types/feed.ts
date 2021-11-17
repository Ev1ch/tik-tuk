export interface IVideoMeta {
  id: string;
  height: number;
  width: number;
  duration: number;
  ratio: string;
  cover: string;
  originCover: string;
  dynamicCover: string;
  playAddr: string;
  downloadAddr: string;
  shareCover: string[];
  reflowCover: string;
  bitrate: number;
  encodedType: string;
  format: string;
  videoQuality: string;
  encodeUserTag: string;
  codecType: string;
  definition: string;
}

export interface IAuthorMeta {
  id: string;
  uniqueId: string;
  nickname: string;
  avatarThumb: string;
  avatarMedium: string;
  avatarLarger: string;
  signature: string;
  verified: boolean;
  secUid: string;
  secret: boolean;
  ftc: boolean;
  relation: number;
  openFavorite: boolean;
  commentSetting: number;
  duetSetting: number;
  stitchSetting: number;
  privateAccount: boolean;
}

export interface IMusicMeta {
  id: string;
  title: string;
  playUrl: string;
  coverThumb: string;
  coverMedium: string;
  coverLarge: string;
  authorName: string;
  original: boolean;
  duration: number;
  album: string;
}

export interface IChallenge {
  id: string;
  title: string;
  desc: string;
  profileThumb: string;
  profileMedium: string;
  profileLarger: string;
  coverThumb: string;
  coverMedium: string;
  coverLarger: string;
  isCommerce: boolean;
}

export interface IStats {
  diggCount: number;
  shareCount: number;
  commentCount: number;
  playCount: number;
}

export interface ITextExtra {
  awemeId: string;
  start: number;
  end: number;
  hashtagName: string;
  hashtagId: string;
  type: number;
  userId: string;
  isCommerce: boolean;
  userUniqueId: string;
  secUid: string;
  subType: number;
}

export interface IAuthorStats {
  followingCount: number;
  followerCount: number;
  heartCount: number;
  videoCount: number;
  diggCount: number;
  heart: number;
}

export interface ISticker {
  stickerType: number;
  stickerText: string[];
}

export interface IFeedTikTuk {
  id: string;
  desc: string;
  createTime: number;
  video: IVideoMeta;
  author: IAuthorMeta;
  music: IMusicMeta;
  challenges: IChallenge[];
  stats: IStats;
  duetInfo: {
    duetFromId: string;
  };
  originalItem: boolean;
  officalItem: boolean;
  textExtra: ITextExtra[];
  secret: boolean;
  forFriend: boolean;
  digged: boolean;
  itemCommentStatus: number;
  showNotPass: boolean;
  vl1: boolean;
  itemMute: boolean;
  authorStats: IAuthorStats;
  privateItem: boolean;
  duetEnabled: boolean;
  stitchEnabled: boolean;
  shareEnabled: boolean;
  stickersOnItem?: ISticker[];
  isAd: boolean;
  duetDisplay: number;
  stitchDisplay: number;
}

export interface IFeed {
  statusCode: number;
  itemList: IFeedTikTuk[];
  cursor: string;
  hasMore: boolean;
}
