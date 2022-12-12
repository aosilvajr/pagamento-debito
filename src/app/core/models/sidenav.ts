export type Children = {
  name: string;
  url: string;
};

export type SideNav = {
  name: string;
  icon: string;
  children: Children[];
};
