import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wubkdfvobkemlzobncim.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1YmtkZnZvYmtlbWx6b2JuY2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NzUzNTAsImV4cCI6MjAzMTQ1MTM1MH0.E2iueJk5B3ijKrtJtRsYBl61WkuGsk9emY6MLpEfKwQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
