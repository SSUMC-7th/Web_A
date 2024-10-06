const movieCategories = [
  "현재 상영중인",
  "인기있는",
  "높은 평가를 받은",
  "개봉 예정중인",
];

function Movies() {
  return (
    <div>
      <h1> categories </h1>
      {movieCategories.map((el, idx) => {
        return (
          <div>
            <h1>{el}</h1>
            image
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
