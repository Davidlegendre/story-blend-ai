import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://bjarsntemjflyelqhyiq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqYXJzbnRlbWpmbHllbHFoeWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5OTM1NzAsImV4cCI6MjAzODU2OTU3MH0.zQcqJVtL5gUhjzLsNDw0rHBk7ajTC2EccSqVwWTJxMc",
  {
    auth: {
      flowType: "pkce"
    }
  }
);

export { supabase as s };
