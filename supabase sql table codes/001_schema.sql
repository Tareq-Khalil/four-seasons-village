create extension if not exists "pgcrypto";
create table public.profile(
    id uuid primary key references auth.users(id) on delete cascade,
    username text unique,
    display_name text,
    level integer not null default 1,
    xp integer not null default 0,
    coins integer not null default 100,
    current_season text not null default 'autumn' check (current_season in ('spring', 'summer', 'autumn', 'winter' )),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now() 
);
create table public.items(
    id text primary key,
    name text not null,
    description text not null,
    category text not null,
    rarity text not null,
);
create table public.inventory(
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references public.profiles(id) on delete cascade,
    item_id text not null references public.items(id) on delete cascade,
    quantity integer not null default 0 check (quantity >=0),
    unique(user_id, item_id)
);
create table public.quests(
    id text primary key,
    title text not null,
    description text not null,
    season text not null,
    reward_xp integer not null default 0,
    reward_coins integer not null default 0,
    reward_items_id text references public.items(id)
);
create table public.player_quests(
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references public.profiles(id) on delete cascade,
    quest_id text not null references public.quests(id) on delete cascade,
    progress jsonb not null default '{}'::jsnob,
    completed boolean not null default false,
    unique(user_id, quest_id)
);
create table public.discoveries(
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references public profiles(id) on delete cascade,
    item_id text not null references public.items(id) on delete cascade,
    discovered_at timestamptz not null default now().
    unique(user_id, item_id)
);
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    insert into public.profiles (id,username,display_name)
    values(
        new.id,
        coalesce(new.raw_user_meta_data->>'username', split_part(new,mail,'@',1)),
        coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
    );
    return new;
end;
$$;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
insert into public.items (id,name,description,category,rarity) values
('wildflower','Wildflower', 'A small flower growing beside village paths.', 'flower', 'common')
('herb','Medow Herb','A fragrant herb often used by the gardener.','plant','common')
('berry','Meadow Herb','A sweet berry that grows in sunny summer patches.','plant','common')
('firefly','Forest Berry','A gentle glow captured during a summer evening.','special','rare')
('sunflower','Sunflower','A bright flower that follows the summer sun.','flwoer','uncommon')
('trout','Silver Trout','A quick fish found in the clear lake.','fish','uncommon')
('mushroom','Autumn Mushrrom','A warm-colored mushroom hiding beneath fallen leaves.','mushroom','common')
('chestnut','Chestnut','A nut gathered from the old forest tress.','crop','common')
('apple','Valley Apple','A crisp apple from the village orchards.','crop','uncommon')
('winter-herb','Wintere Herb','A hardy plant that survives under the snow.','plant','rare')
('ice-crystal','Ice Crystal','A Clear crystal found near frozen water.','mineral','rare')
('iron-ore','Iron ore','Useful ore collected along the mountain trail.','mineral','uncommon')
('moonflower','Moonflower','A rare flower that opens only after sunset.','special','epic')
