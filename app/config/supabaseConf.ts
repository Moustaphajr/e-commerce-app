import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://whefdfcgusuyqfvupico.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoZWZkZmNndXN1eXFmdnVwaWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4MjUwNTMsImV4cCI6MjAxNjQwMTA1M30.PiBCNeAtUxEmVh2Sj403SYBNr4ATZ1snFPBGAe5oAug"
);
