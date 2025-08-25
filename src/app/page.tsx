import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  status: "Selesai" | "Sedang Berjalan";
};

const projects: Project[] = [
  {
    id: "gbl",
    title: "GBL — Gerakan Baitul Lughah",
    description:
      "Website organisasi dengan fokus kegiatan pembelajaran bahasa Arab dan pengembangan komunitas.",
    image: "/project-1.svg",
    status: "Sedang Berjalan",
  },
  {
    id: "silat",
    title: "Silat Kumango",
    description:
      "Situs resmi Silat Kumango untuk dokumentasi, informasi event, dan profil perguruan.",
    image: "/project-2.svg",
    status: "Selesai",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] grid-noise">
      <header className="container mx-auto px-6 py-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="size-14 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10 backdrop-blur">
            <Image src="/avatar.svg" alt="Dedi Irfan" width={56} height={56} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Dedi Irfan
            </h1>
            <p className="text-sm text-black/60 dark:text-white/60">
              Dosen Teknik Informatika — Universitas Negeri Padang
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 glass-surface rounded-xl border border-black/10 dark:border-white/10 px-2 py-1">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/20 bg-white/30 hover:bg-white/40 dark:bg-white/5 dark:hover:bg-white/10 text-sm font-medium h-10 px-4 py-2 backdrop-blur-sm"
          >
            Lihat Proyek
          </a>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-20">
        <section className="mb-10">
          <div className="max-w-2xl">
            <h2 className="text-xl font-medium tracking-tight mb-2">Tentang</h2>
            <p className="text-black/70 dark:text-white/70">
              Fokus pada pengembangan sistem informasi, arsitektur web modern,
              dan integrasi data.
            </p>
          </div>
        </section>

        <section id="projects" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight">Proyek</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[16/9] w-full relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        project.status === "Selesai" ? "success" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    {project.id === "gbl" && (
                      <a
                        href="https://gbl.dedyirfan.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-black/80 dark:text-white/80 hover:underline"
                      >
                        Kunjungi GBL ↗
                      </a>
                    )}
                    {project.id === "silat" && (
                      <a
                        href="https://silatkumango.dedyirfan.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-black/80 dark:text-white/80 hover:underline"
                      >
                        Kunjungi Silat Kumango ↗
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-6 pb-12 text-xs text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} Dedi Irfan — Universitas Negeri Padang
      </footer>
    </div>
  );
}
