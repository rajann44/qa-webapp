export interface UserType {
  id: string;
  username: string;
  hashedPassword: string;
}

export interface ListType {
  id: string;
  title: string;
  users: UserType[];
  items: ItemType[];
}

export interface ItemType {
  id: string;
  user: UserType;
  title: string;
  amount: number;
  category: CategoryType;
}

export enum CategoryType {
  Home = "House and Garden",
  Health = "Health and Beauty",
  Food = "Food and Drinks",
  Transport = "Transport",
  Entertainment = "Entertainment",
  Other = "Other",
}

export type AuthTokensType = UserType | false;
