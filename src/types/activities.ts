import { Database } from './generated/supabase'

export type Activities = Database['copyfuse']['Tables']['activities']['Row']
