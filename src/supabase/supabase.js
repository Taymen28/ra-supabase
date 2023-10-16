import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://wovhjcgzwabtjeretjie.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvdmhqY2d6d2FidGplcmV0amllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxMzgxMTIsImV4cCI6MTk3ODcxNDExMn0.N8aS8wAaZI4wISxkIy5bq5kxufphlUdXgLT-w_upKhs"
);
