-- Fix security issues: Restrict profiles table access to prevent public exposure of emails and phone numbers

-- Drop the overly permissive policy that makes all profile data public
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create a restricted policy that only allows users to view their own profile
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);