import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Product {
    _id : ID
    budget: Int
    genres : [genresItem]
    homepage: String
    id : Int
    keywords : [keywordsItem]
    originalLanguage: String
    originalTitle : String
    overview : String
    popularity: Int
    productionCompanies: [productionCompaniesItem],
    productionCountries: [productionCountriesItem],
    releaseDate: String,
    revenue: Int,
    runtime: Int,
    spoken_languages: [spoken_languagesItem],
    status: String,
    tagline: String,
    title: String,
    voteAverage: Int,
    voteCount: Int
    

}

type Query {
    getProduct(_id: ID) : Product
    allProducts: [Product]
    getSort: [Product]
 }
 type genresItem{
    id : ID
    name : String
 }

 type keywordsItem{
    id : ID
    name : String
 }

 type productionCompaniesItem{
    id : ID
    name : String
 }

 type productionCountriesItem{
    iso_3166_1 : String
    name : String
 }

 type spoken_languagesItem{
    iso_639_1  : String
    name : String
 }
    input ProductInput{
    budget: Int
    genres : [genresItemInput]
    homepage: String
    id : Int
    keywords : [keywordsItemInput]
    originalLanguage: String
    originalTitle : String
    overview : String
    popularity: Int
    productionCompanies: [productionCompaniesItemInput],
    productionCountries: [productionCountriesItemInput],
    releaseDate: String,
    revenue: Int,
    runtime: Int,
    spoken_languages: [spoken_languagesItemInput],
    status: String,
    tagline: String,
    title: String,
    voteAverage: Int,
    voteCount: Int
 }
 input genresItemInput{
    id : ID
    name : String
 }
input keywordsItemInput{
    id : ID
    name : String
 }


 input productionCompaniesItemInput{
    id : ID
    name : String
 }

 input productionCountriesItemInput{
    iso_3166_1 : String
    name : String
 }

 input spoken_languagesItemInput{
    iso_639_1  : String
    name : String
 }
 type Mutation {
     createProduct(input: ProductInput) : Product
     updateProduct(_id: ID!, input: ProductInput) : Product
     deleteProduct(_id: ID!) : Product
 }
`
export default makeExecutableSchema({
    typeDefs,
    resolvers
});
