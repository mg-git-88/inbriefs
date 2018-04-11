export class NewsFeedModel {
    status: string;
    totalResults: number;
    articles: ArticleModel[];
}

export class ArticleSource {
    id: string;
    name: string;
}

export class ArticleModel {
    source: ArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

export class RequestModel {
    q: string;
    sources: string;
    domains: string;
    from: string;
    to: string;
    language: string;
    sortBy: SortBy;
    pageSize: number;
    apiKey: string;
    endpointType: string;
    country: string;
    category: string;
}

export enum SortBy {
    publishedAt = "publishedAt",
    popularity = "popularity",
    relevancy = "relevancy"
}

export enum EndpointType {
    everything = "everything",
    topHeadlines = "top-headlines",
    sources = "sources"
}

export enum CategoryType {
    business = "business",
    entertainment = "entertainment",
    general = "general",
    health = "health",
    science = "science",
    sports = "sports",
    technology = "technology"
}