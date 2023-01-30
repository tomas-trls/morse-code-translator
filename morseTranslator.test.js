import { englishToMorse, morseToEnglish } from "./morseTranslator.js";

describe("englishToMorse", () => {
  it("Should return '.-' when given a string of 'a'", () => {
    const translatedString = englishToMorse("a");
    expect(translatedString).toBe(".-");
  });

  it("Should return '.----' when given a string of '1'", () => {
    const translatedString = englishToMorse("a");
    expect(translatedString).toBe(".-");
  });

  it("Should only accept strings", () => {
    const translatedString = englishToMorse(1);
    expect(translatedString).toBe("undefined");
  });

  it("Should return '.... . .-.. .-.. --- / .-- --- .-. .-.. -..' when given 'Hello World'", () => {
    const translatedSentence = englishToMorse("Hello World");
    expect(translatedSentence).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
  });

  it('should return an the error "Nothing was given" if an emptyString was given', () => {
    const emptyString = englishToMorse("");
    expect(emptyString).toBe("Nothing was given");
  });

  it('should return "-...-" when given "="', () => {
    const symbolString = englishToMorse("=");
    expect(symbolString).toBe("-...-");
  });
});

describe("morseToEnglish", () => {
  it("Should return 'a' when given a string of '.-'", () => {
    const translatedString = morseToEnglish(".-");
    expect(translatedString).toBe("a");
  });

  it("Should return '1' when given a string of '.----'", () => {
    const translatedString = morseToEnglish(".----");
    expect(translatedString).toBe("1");
  });

  it("Should only accept strings", () => {
    const translatedString = morseToEnglish(1);
    expect(translatedString).toBe("undefined");
  });

  it("Should return 'Hello World' when given '.... . .-.. .-.. --- / .-- --- .-. .-.. -..'", () => {
    const translatedSentence = morseToEnglish(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(translatedSentence).toBe("hello world");
  });

  it('should return an the error "Nothing was given" if an emptyString was given', () => {
    const emptyString = morseToEnglish("");
    expect(emptyString).toBe("Nothing was given");
  });

  it('should return "=" when given "-...-"', () => {
    const symbolString = morseToEnglish("-...-");
    expect(symbolString).toBe("=");
  });
});
