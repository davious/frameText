import { assertEquals } from "@std/assert";
import { chunkWords } from "./main.ts";

Deno.test(function Word() {
  assertEquals(
    chunkWords(["Word"], 0),
    ["Word"],
  );
});

Deno.test(function CoupleWords() {
  assertEquals(
    chunkWords(["Couple", "Words"], 0),
    ["Couple", "Words"],
  );
});

Deno.test(function CoupleWords20() {
  assertEquals(
    chunkWords(["Couple", "Words"], 20),
    ["Couple Words"],
  );
});
