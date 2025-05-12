import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pyxepwwlfgdxgwwsfxsg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5eGVwd3dsZmdkeGd3d3NmeHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NDE0ODEsImV4cCI6MjA2MjMxNzQ4MX0.UwQ9IFcXTrFzrKK4t3Km8FWX4jShg5aQqaiQEh5sUNU'

export const supabase = createClient(supabaseUrl, supabaseKey)