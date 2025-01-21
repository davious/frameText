/**
 * Frames text to a set width or fir to the longest word
 *
 * @param text The text to frame
 * @param minFrameWidth The minimum frame width allowed, default is longest word (plus 4)
 * @returns framed text
 */
export function frameText(text: string, minFrameWidth = 0): string {
  const words = text.split(/\s+/);
  const minWidthOfText = Math.max(...words.map((w) => w.length));
  const innerWidth = Math.max(minWidthOfText, minFrameWidth - 4);
  const top = "+" + "-".repeat(innerWidth + 2) + "+";
  const chunkedWords = chunkWords(words, innerWidth);

  const cert = [];
  cert.push(top);
  cert.push(
    ...chunkedWords.map((w) => "| " + centerText(w, innerWidth) + " |"),
  );
  cert.push(top);
  return cert.join("\n");
}

/** Chunks words together (space seperated, as the width allows) */
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

/** spaces text to be centered to a given width, leans left */
export function centerText(text: string, width: number): string {
  const fillLength = Math.max(width - text.length, 0);
  const halfFill = Math.floor(fillLength / 2);
  const rightOffset = fillLength % 2;
  return " ".repeat(halfFill) + text + " ".repeat(halfFill + rightOffset);
}
