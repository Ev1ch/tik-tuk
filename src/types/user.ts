export interface IUserBioLink {
  link: string;
  risk: number;
}

export interface IUserStats {
  followerCount: number;
  followingCount: number;
  heart: number;
  heartCount: number;
  videoCount: number;
  diggCount: number;
}

export interface IUserInformation {
  id: string;
  shortId: string;
  uniqueId: string;
  nickname: string;
  avatarLarger: string;
  avatarMedium: string;
  avatarThumb: string;
  signature: string;
  createTime: number;
  verified: boolean;
  secUid: string;
  ftc: boolean;
  relation: number;
  openFavorite: boolean;
  bioLink: IUserBioLink;
  commentSetting: number;
  duetSetting: number;
  stitchSetting: number;
  privateAccount: boolean;
  secret: boolean;
  isADVirtual: boolean;
  roomId: string;
}

export interface IUserItem {
  id: string;
}

export interface IUser {
  user: IUserInformation;
  stats: IUserStats;
  itemList: IUserItem[];
}
