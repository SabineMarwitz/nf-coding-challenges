import { getCharacterName } from "./characterService";
import * as getModule from "../api/getCharacter";

jest.mock("../api/getCharacter"); // replaces the whole module

test("returns data from mocked getCharacter", async () => {
  (getModule.getCharacter as jest.Mock).mockResolvedValue({
    id: 1,
    name: "Rick Sanchez",
  });

  const result = await getCharacterName(1);
  expect(result).toEqual("Rick Sanchez");
});
