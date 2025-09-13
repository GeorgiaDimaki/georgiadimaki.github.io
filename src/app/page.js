import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';

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
    <main>
      <Header name={data.name} socials={data.socials} />
      <About bio={data.bio} />
      <Projects projects={data.projects} />
      <Footer socials={data.socials} />
    </main>
  );
}