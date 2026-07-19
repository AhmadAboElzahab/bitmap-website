export type Block = {
  id?: string;
  type: string;
  [key: string]: unknown;
};

export type HeaderData = {
  title?: string;
  backgroundImage?: string;
};
