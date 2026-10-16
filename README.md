# Island of Secrets — The Arrival server candidate

Protocol 2 Colyseus server, private rooms for 2–6 explorers. This branch is staged separately; main remains the working release until frontend/device review.

Install: npm ci
Start: npm start
Tests: node --import tsx --test tests/game.test.ts
Health: /health (protocol 2)

Render: Node runtime, Free plan, build npm ci --omit=dev, start npm start. PORT is provided by Render. No database or paid add-ons.

Shared doors/consequences are server-owned. Each client receives a filtered snapshot: other players’ invitations, memories, notes and private objectives are stripped. Progress is in memory; server restart clears rooms. Reconnection reserves identity for 45 seconds.

Story and original code: Brittany Randall project. Colyseus, Express and tsx retain their upstream licenses. Kai is fictional.
