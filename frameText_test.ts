import { assertEquals } from "@std/assert";
import { frameText } from "./main.ts";

Deno.test(function Certificate() {
  assertEquals(
    frameText("Certificate"),
    `
+-------------+
| Certificate |
+-------------+
`.trim(),
  );
});

Deno.test(function Certificate20Wide() {
  assertEquals(
    frameText("Certificate", 20),
    `
+------------------+
|   Certificate    |
+------------------+
`.trim(),
  );
});

Deno.test(function Cert() {
  assertEquals(
    frameText("Cert"),
    `
+------+
| Cert |
+------+
`.trim(),
  );
});

Deno.test(function Cert20Wide() {
  assertEquals(
    frameText("Cert", 20),
    `
+------------------+
|       Cert       |
+------------------+
`.trim(),
  );
});

Deno.test(function MultipleLines() {
  assertEquals(
    frameText("Multiple Lines"),
    `
+----------+
| Multiple |
|  Lines   |
+----------+
`.trim(),
  );
});

Deno.test(function MultipleLines14Wide() {
  assertEquals(
    frameText("Multiple Lines", 14),
    `
+------------+
|  Multiple  |
|   Lines    |
+------------+
`.trim(),
  );
});
