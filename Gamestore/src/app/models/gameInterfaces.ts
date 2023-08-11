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
  idGame?: string;
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  description: string;
  ownerInfo: IOwnerData;
  _ownerId: string;
  _id: string;
  _createdOn: number;
}

export interface IGameBuyerData {
  idGame: string;
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  description: string;
  ownerInfo: IOwnerData;
}

export interface IGameBuyerDataReturnData {
  idGame: string;
  _ownerId: string;
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  description: string;
  ownerInfo: IOwnerData;
  _createdOn: number;
  _id: string;
}