import { getCharacter } from "../api/getCharacter";

export async function getCharacterName(id: number): Promise<string> {
  const data = await getCharacter(id);
  return data.name;
}
