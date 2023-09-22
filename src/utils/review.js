export const addIncorrect = (question) => {
  const incorrects = JSON.parse(localStorage.getItem('incorrects') ?? '[]');
  const newIncorrects = [...incorrects, question];
  localStorage.setItem('incorrects', JSON.stringify(newIncorrects));
};
