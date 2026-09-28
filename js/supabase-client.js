// Configuração da conexão com o Supabase
// Pegue esses dois valores em: Painel do Supabase > Project Settings > API
const SUPABASE_URL = "https://llvtvmagngzynwbynufg.supabase.co"; // ex: https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = "sb_publishable_UarSPfUPeYtwC4tKFCrfXw_57X0VUSe";

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);