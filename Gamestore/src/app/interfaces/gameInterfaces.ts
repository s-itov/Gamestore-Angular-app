export interface IOwnerData {
  imageUrl: string;
  email: string;
  username: string;
}

export interface IGameData {
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  description: string;
  ownerInfo: IOwnerData;
}

export interface IGameReturnData {
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  description: string;
  _ownerId: string;
  _id: string;
  _createdOn: number;
}
