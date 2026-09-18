# Four Seasons Village

A cozy interactive village game where players explore a changing world, manage resources, dicover locactions, and progress his own storyline.

<p align="center">
    <img src="public/assets/welcome.png" alt="Four Seasons Village(Autumn)" width="300">
</p>
<p align="center">
    <img src="public/assets/welcome1.png" alt="Four Seasons Village(Winter)" width="300">
</p>
<p align="center">
    <img src="public/assets/welcome2.png" alt="Four Seasons Village(Spring)" width="300">
</p>
<p align="center">
    <img src="public/assets/welcome3.png" alt="Four Seasons Village(Summer)" width="300">
</p>

<p align="center">
    <strong Explore. Discover. Build your story.>
</p>

---

## Overview

Four Seasons Village is a simple interactive web-based game, in its initial phase, built around exploration, progression, inventory management, stroytelling.

Players can create their own account, enter their village, explore different locations, collect and manage cool items, and experience their own world by their choice.

---

## Team

Four Seasons Village is being developed by:
| Team Member | Role | Contact |
|---|---|---|
| Tareq Khalil | Lead Developer | [Github](https://github.com/Tareq-Khalil) |
| Mazen Khalil | Backend Developer | [Github](https://github.com/mazenahmed1721)|
| Mohamed Salama | Ui/Ux Developer | [Github](https://github.com/MADO3308)
---

## Explore 

After creating your account you can start exploring your village.
### Village

<p align="center">
    <img src="public/assets/screenshots/village.png" alt="village" width="850">
</p>

The main village acts as the central gub where players can access multiple areas and discover new things.

### Interactive Map

<p align="center">
    <img src="public/assets/screenshots/map.png" alt="Village Map" width="850">
</p>

Use your map to explore your own village and travel between different locations.

### Player Profile

<p align="center">
    <img src="public/assets/screenshots/profile.png" alt="Profile" width="850">
</p>
Track your own progress, level, resources and other things from your profile page.

### Inventory

<p align="center">
    <img src="public/assets/screenshots/inventory.png" alt="Inventory" width="850">
</p>

Collect items and manage them through the inventory page

### Quests
<p align="center">
    <img src="public/assets/screenshots/quests.png" alt="Quests" width="850">
</p>

Accept quests for more challenge and finish them to claim xp and coins.
---

## Database

We used Supabase as our database and for Authentication(We also made the data saved in the Local Storage). Your will find the sql codes to create the suitable tables in  "supabase sql table codes" folder.

<p align="center">
    <img src="public/assets/screenshots/supabase.png">
</p>

---
## Tech used

- HTML
- CSS
- JS
- Typescript
- SQL
- Vite
- Tailwind
- Supabase
- Vercel

---
##Teams Work
### Hoshino_tls123

I was the **main lead developer** of the Four Seasons Village project. I initialized the React project, created and organized the repository, established the initial project structure, and distributed the development tasks between the team members.

I was responsible for developing the  core files of the project, including the main project configuration, game data, database integration, and supporting systems:

* `src/main.tsx`
* `src/app/GameProvider.tsx`
* `src/vite-env.d.ts`
* `src/types/game.ts`
* `src/types/database.ts`
* `src/data/activities.ts`
* `src/data/events.ts`
* `src/data/locations.ts`
* `src/data/items.ts`
* `src/data/quests.ts`
* `src/data/seasons.ts`
* `src/data/npcs.ts`
* `src/services/databaseService.ts`
* `src/utils/progression.ts`
* `src/utils/storage.ts`
* `supabase/...` (sql codes)
* `README.md`

I also configured the **Supabase database** and wrote the required database and integration code to connect the website with the backend.

As the lead developer, I reviewed the code written by the other developers, fixed syntax errors and implementation issues, and made changes whenever different parts of the project needed to be integrated or corrected as shown in the branches commits. I also made several updates throughout the development process to some other files when necessary.

In addition, I created and added the project's images and other visual assets, handled parts of the website, and made sure the my friends' work was properly integrated into the final website successfuly by overly monitoring the branches and the merges.

Finally, I wrote the `README.md` file to document the project, and its structure.

