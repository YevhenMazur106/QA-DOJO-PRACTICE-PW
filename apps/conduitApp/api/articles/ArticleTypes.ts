export type Article = {
  slug?: string;
  title?: string;
  description?: string;
  body?: string;
  createdAt?: string;
  updatedAt?: string;
  tagList?: string[];
  favorited?: boolean;
  favoritesCount?: number;
};

export type Author = {
  username?: string;
  image?: string;
  following?: boolean;
};

export type ArticleResponse = {
  articles: Article[];
};

export type ArticleCreation = {
  article: Article;
};
