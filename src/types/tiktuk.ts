export interface IAuthorMeta {
  id: string;
  secUid: string;
  name: string;
  nickName: string;
  verified: boolean;
  signature: string;
  avatar: string;
  following: number;
  fans: number;
  heart: number;
  video: number;
  digg: number;
}

export interface IVideoMeta {
  height: number;
  width: number;
  duration: number;
}

export interface ICovers {
  default: string;
  origin: string;
  dynamic: string;
}

export interface IEffectSticker {
  id: string;
  name: string;
}

export interface IHashtag {
  cover: string;
  id: string;
  name: string;
  title: string;
}

export type TMention = string;

export interface IMusicMeta {
  musicId: string;
  musicName: string;
  musicAuthor: string;
  musicOriginal: boolean;
  musicAlbum: string;
  playUrl: string;
  coverThumb: string;
  coverMedium: string;
  coverLarge: string;
  duration: number;
}

export interface ITikTuk {
  id: string;
  secretID: string;
  text: string;
  createTime: number;
  authorMeta: IAuthorMeta;
  musicMeta: IMusicMeta;
  covers: ICovers;
  webVideoUrl: string;
  videoUrl: string;
  videoUrlNoWaterMark: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: IVideoMeta;
  diggCount: number;
  shareCount: number;
  playCount: number;
  commentCount: number;
  downloaded: boolean;
  mentions: TMention[];
  hashtags: IHashtag[];
  effectStickers: IEffectSticker[];
}
