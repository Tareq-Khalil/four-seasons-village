alter table public.profiles enable row level security;
alter table public.inventory enable row level security;
alter table public.player_quests enable row level security;
alter table public.discoveries enable row level security;
alter table public.items enable row level security;
alter table public.quests enable row level security;
create policy "profiles own select" on public.profiles
for select using (auth.uid()=id);
create policy "profiles own insert" on public.profiles
for insert with check (auth.uid()=id);
create policy "profiles own update" on public.profiles
for update using (auth.uid()=id) with check (auth.id()=id);
create policy "inventory own select" on public.inventory
for select using (auth.uid()=user_id);
create policy "inventory own insert" on public.inventory
for insert with check (auth.uid()=user_id);
create policy "inventory own update" on public.inventory
for update using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "inventory own delete" on public.inventory
for delete using (auth.uid()=user_id);
create policy "quests own select" on public.player_quests
for select using (auth.uid()=user_id);
create policy "quests own insert" on public.player_quests
for insert with check (auth.uid()=user_id);
create policy "quests own update" on public.player_quests
for update using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "discoveries own select" on public.discoveries
for select using (auth.uid()=user_id);
create policy "discoveries own insert" on public.discoveries
for insert with check (auth.uid()=user_id);
create policy "item public select" on public.items
for select using (true);
create policy "quests public select" on public.quests
for select using (true);