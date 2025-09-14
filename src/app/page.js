import { Sidebar } from '@/components/Sidebar';
import { MobileNav } from '@/components/MobileNav';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

import path from 'path';
import fs from 'fs/promises';

async function getData() {
  const jsonDirectory = path.join(process.cwd());
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  const data = JSON.parse(fileContents);
  return data;
}

export default async function Home() {

  const data = await getData();

  return (
    <div>
      <Sidebar/>
      <MobileNav/>
      <main>
        <About name={data.name} bio={data.bio} resumeUrl={data.resumeUrl} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Contact email={data.email} socials={data.socials} />
      </main>
    </div>
  );
}