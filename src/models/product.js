import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
      budget: Number,
  	  genres: [{id: Number, name: String}],
  	  homepage: String,
	  id: Number,
	  keywords: [{id: Number, name: String, _id: false}],
	  originalLanguage: String,
	  originalTitle: String,
	  overview: String,
	  popularity: Number,
	  productionCompanies: [{id: Number, name: String}],
	  productionCountries: [{id: String, name: String}],
	  releaseDate: String,
	  revenue: Number,
	  runtime: Number,
	  spoken_languages: [{iso_639_1: String, name: String}],
	  status: String,
	  tagline: String,
	  title: String,
	  voteAverage: Number,
	  voteCount: Number
	 

})
export default mongoose.model('movie', ProductSchema);

