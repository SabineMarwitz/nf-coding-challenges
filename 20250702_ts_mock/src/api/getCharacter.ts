export async function getCharacter(id: number): Promise<any> {
  const res = await fetch("https://rickandmortyapi.com/api/character/:${id}");
  return res.json();
}
