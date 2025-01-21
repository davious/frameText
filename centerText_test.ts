import { assertEquals } from "@std/assert";
import { centerText } from "./main.ts";

Deno.test(function Word() {
  assertEquals(
    centerText("Word", 0),
    "Word",
  );
});

Deno.test(function Word5() {
  assertEquals(
    centerText("Word", 5),
    "Word ",
  );
});

Deno.test(function Word6() {
  assertEquals(
    centerText("Word", 6),
    " Word ",
  );
});
