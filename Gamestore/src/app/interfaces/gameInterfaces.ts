export interface IGameData {
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  description: string;
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
