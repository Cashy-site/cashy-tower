// The Cashy leaderboard script (https://api.cashy.world/client.js), loaded by index.html.
// It may be missing (offline, blocked), so the game only ever calls it as window.CashyLB?.…
type CashyResult = { tag?: string; error?: string } & Record<string, unknown>;

interface Window {
  CashyLB?: {
    start(game: string): void;
    finish(game: string, stats: Record<string, number>): Promise<CashyResult>;
    show(result: CashyResult, opts: { game?: string; share?: (tag: string) => string; label?: Record<string, string> }): void;
    hide(): void;
  };
}
