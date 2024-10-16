import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kpkhojjvvsydpcyuaxmw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwa2hvamp2dnN5ZHBjeXVheG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NDU4MDQsImV4cCI6MjA0MjQyMTgwNH0.ovQKz1NdDJHI_SPEWfwc9uqKIsfRP2K8yn_jPPc4WN0";
export const supabase = createClient(supabaseUrl, supabaseKey);
