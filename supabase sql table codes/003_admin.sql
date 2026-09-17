create table public.admin_users(
    user_id uuid primary key references auth.users(id) on delete cascade,
    created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
create function public.is_admin()
returns boolean
language sql
security deffiner
set search_path = public
stable
as $$
    select exists(
        select 1 from public.admin_users
        where user_id=auth.uid()
    );
$$;
create policy "admin can inspect profiles" on public.profiles
for select using(auth.uid()=id or public.is_admin());
create policy "admin can inspect incentory" on public.inventory
for select using(auth.uid()=user_id or public.is_admin());
create policy "admin can inspect player quests" on public.player_quests
for select using(auth.uid()=user_id or public.is_admin());
create policy "admin can inspect discoveries" on public.discoveries
for select using (auth.uid()=user_id or public.is_admin());
create policy "admin table self read" on public.admin_users
for select using (auth.uid()=user_id);