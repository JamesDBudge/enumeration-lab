const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findByTitle = function (title) {
  for (const film of this.films) {
    if (film.title === title) {
      return film
    }
  }
};

Cinema.prototype.filterByGenre = function (genre) {
  const filteredFilms = this.films.filter((film) => {
    return genre === film.genre
  })
  return filteredFilms
};

Cinema.prototype.checkByYear = function (year) {
  for (const film of this.films) {
    if (film.year === year) {
      return true
    }
  }
  return false
};

Cinema.prototype.checkLength = function (films, length) {
  const result = true
  for (film of this.films) {
    if (film.length < length) {
      return false
    }
  }
  return result
};

Cinema.prototype.totalRunTime = function () {
    const result = this.films.reduce((total, film) => {
      return total + film.length
    }, 0)
    return result
};

Cinema.prototype.filterByYear = function (year) {
  const filteredFilms = this.films.filter((film) => {
    return year === film.year
  })
  return filteredFilms
};

Cinema.prototype.filterByProperty = function (propertyName, value) {
  const filteredFilms = this.films.filter((film) => {
    return value === film[propertyName]
  })
  return filteredFilms
};

module.exports = Cinema;
