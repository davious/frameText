import { assertEquals } from "@std/assert";
import { centeredWord } from "./main.ts";

Deno.test(function Word() {
  assertEquals(
    centeredWord("Word", 0),
    "Word",
  );
});

Deno.test(function Word5() {
  assertEquals(
    centeredWord("Word", 5),
    "Word ",
  );
});

Deno.test(function Word6() {
  assertEquals(
    centeredWord("Word", 6),
    " Word ",
  );
});
