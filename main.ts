export function frameText(text: string, minWidth = 0): string {
  const words = text.split(/\s+/);
  const minWidthOfText = Math.max(...words.map((w) => w.length));
  const innerWidth = Math.max(minWidthOfText, minWidth - 4);
  const top = "+" + "-".repeat(innerWidth + 2) + "+";
  const chunkedWords = chunkWords(words, innerWidth);

  const cert = [];
  cert.push(top);
  cert.push(
    ...chunkedWords.map((w) => "| " + centeredWord(w, innerWidth) + " |"),
  );
  cert.push(top);
  return cert.join("\n");
}

export function chunkWords(words: string[], width: number): string[] {
  const chunkedWords = [];
  let line = "";
  for (const word of words) {
    if (line == "") {
      line = word;
      continue;
    }
    if (line.length + word.length + 1 > width) {
      chunkedWords.push(line);
      line = word;
      continue;
    }
    line += " " + word;
  }
  chunkedWords.push(line);
  return chunkedWords;
}

export function centeredWord(word: string, width: number): string {
  const fillLength = Math.max(width - word.length, 0);
  const halfFill = Math.floor(fillLength / 2);
  const rightOffset = fillLength % 2;
  return " ".repeat(halfFill) + word + " ".repeat(halfFill + rightOffset);
}
