(() => {
  function getMovieById(movieId: number) {
    console.log({ movieId });
  }

  function getMovieCast(movieId: number) {
    console.log({ movieId });
  }

  function getActorBio(actorId: number) {
    console.log({ actorId });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ cast, description, rating, title }: Movie) {
    console.log({ cast, description, rating, title });
  }

  function checkFullName(fullName: string) {
    console.log({ fullName });
    return true;
  }

  function createActor(fullName: string, birthDate: Date): boolean {
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthDate);
    return true;
  }

  // Continuar
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
