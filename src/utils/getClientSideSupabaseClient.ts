import { Database } from '@/types/generated/supabase'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient<Database, 'copyfuse'>({
  options: {
    db: { schema: 'copyfuse' }
  }
})

export { supabase }
