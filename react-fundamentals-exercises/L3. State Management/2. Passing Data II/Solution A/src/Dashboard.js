import MovieCard from "./MovieCard";

// Instead of passing in the entire props object, we are destructuring via ES6.
// That is, we're getting the profiles, users, and movies properties from the props
// passed into this component. If you need a refresher on this syntax, check
// out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
const Dashboard = ({ usersByMovie, users, movies }) => {
  console.log(usersByMovie)
  console.log(users)
  console.log(movies)
  const movieCards = Object.keys(movies).map((id) => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ));  
  return <ul>{movieCards}</ul>;
};

export default Dashboard;
