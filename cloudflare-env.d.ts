declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    NOTIFY_LK_ENABLED?: string;
    NOTIFY_LK_USER_ID?: string;
    NOTIFY_LK_API_KEY?: string;
    NOTIFY_LK_SENDER_ID?: string;
  }
}
