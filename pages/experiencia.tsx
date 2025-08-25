// Em: pages/experiencia.tsx

import Layout from '../components/common/Layout';
import { motion } from 'framer-motion';
import styles from '../styles/pages/Experiencia.module.css';
import { useLanguage } from '../context/LanguageContext'; // 1. Importe o hook

// --- CONTEÚDO EM PORTUGUÊS ---
const content_pt = {
  title: "Experiência Profissional",
  educationTitle: "Educação",
  skillsTitle: "Habilidades",
  toolsTitle: "Ferramentas",
  jobs: [
    {
      title: "Analista de Web Design Pleno (UX/UI)",
      meta: "Quality Digital | Mai/2024 - Atualmente",
      points: [
        "Otimização de conversão através de testes A/B, análise de métricas e de funis.",
        "Pesquisa e discovery para melhoria da experiência do usuário, utilizando heatmaps e análise comportamental.",
        "Prototipação e design iterativo, testando e refinando soluções UX/UI baseadas em dados.",
        "Colaboração cross-functional com UX, marketing e tecnologia para implementar soluções baseadas em experimentação."
      ]
    },
    {
      title: "Product Designer",
      meta: "Power Kitchen (Toronto, Canadá) | Abr/2023 - Mai/2024",
      points: [
        "UX/UI & Design de Interação: Criação de wireframes e protótipos interativos para validação de jornadas de usuário.",
        "Desenvolvimento Front-End: Construção de landing pages otimizadas para conversão usando HTML, CSS e JavaScript.",
        "Gestão de Testes A/B: Implementação e análise contínua de métricas de conversão (CTR, tempo na página, bounce rate).",
        "Inovação em E-commerce: Consultoria para lojas online, propondo melhorias baseadas em insights de dados.",
        "Colaboração Multidisciplinar: Trabalho com equipes de marketing, produto e TI para implementação de novas funcionalidades."
      ]
    },
     {
        title: "Designer",
        meta: "Grupo Armação | Set/2021 - Mar/2023",
        points: [
            "UX/UI para sites de hotéis, implementando novas funcionalidades, redesign de layouts e otimização da navegação.",
            "Gestão de identidade visual para plataformas digitais, incluindo redes sociais, e-mail marketing e anúncios pagos.",
            "Supervisão de equipe, coordenando um designer na criação de materiais digitais e garantindo aderência ao brandbook.",
            "Análise de métricas, produzindo relatórios quinzenais via Google Analytics e Data Studio."
        ]
    },
    {
        title: "Designer",
        meta: "Agência Premier | Ago/2020 - Ago/2021",
        points: [
            "Criação de identidades visuais e guidelines para marcas de diversos segmentos.",
            "Desenvolvimento de websites alinhados à identidade visual das marcas, priorizando usabilidade e conversão.",
            "Concepção e execução de campanhas publicitárias para redes sociais e anúncios digitais."
        ]
    },
    {
        title: "Designer Freelancer",
        meta: "Gold Coast, Austrália | Ago/2017 - Dez/2019",
        points: [
            "Criação de branding e identidade visual para negócios diversos, incluindo academias, escolas e startups.",
            "Gestão de campanhas digitais, incluindo design para redes sociais, websites e materiais impressos.",
            "Projeto educacional: desenvolvimento da identidade visual e site para um curso que ensinava soft skills via gamificação."
        ]
    },
    {
        title: "Designer",
        meta: "Fremantle | Ago/2016 - Ago/2017",
        points: [
            "Design para reality shows, incluindo X-Factor Brasil e Hell's Kitchen.",
            "Criação de identidade visual para programas de TV e materiais promocionais.",
            "Edição e produção de vídeos, alinhando storytelling e impacto visual."
        ]
    },
    {
        title: "Web Designer",
        meta: "Natue | Mar/2015 - Mar/2016",
        points: [
            "Desenvolvimento de landing pages e materiais promocionais para campanhas de marketing digital.",
            "Criação de e-mail marketing, desde o design até a implementação em HTML.",
            "Design para banners e redes sociais, garantindo alinhamento com identidade visual da marca."
        ]
    },
    {
        title: "Web Designer",
        meta: "Livraria Cultura | Mai/2010 - Mai/2014",
        points: [
            "Desenvolvimento de landing pages promocionais, layout e implementação com HTML e CSS.",
            "Layout e diagramação de revista online e design de banners para o site."
        ]
    }
  ],
  education: [
    { title: "Pós-Graduação em Design de Artefatos Digitais", school: "Cesar School, 2022-2023" },
    { title: "Design Management", school: "Mindroom Innovation, 2018-2020" },
    { title: "Publicidade e Propaganda", school: "FMU, 2010-2014" }
  ],
  skills: [
    "Experiência do Usuário", "Wireframing & Prototipação", "Arquitetura de Informação", "Design de Interação", "Design Thinking & User Research", "Discovery & Testes A/B", "Análise de Dados"
  ],
  tools: [
    "Figma, Adobe XD, Photoshop, Illustrator", "Google Analytics, Hotjar, Data Studio", "HTML, CSS, JavaScript"
  ]
};

// --- CONTEÚDO EM INGLÊS ---
const content_en = {
  title: "Professional Experience",
  educationTitle: "Education",
  skillsTitle: "Skills",
  toolsTitle: "Tools",
  jobs: [
    {
      title: "Senior Web Design Analyst (UX/UI)",
      meta: "Quality Digital | May/2024 - Present",
      points: [
        "Conversion optimization through A/B testing, metrics, and funnel analysis.",
        "Research and discovery to improve user experience using heatmaps and behavioral analysis.",
        "Prototyping and iterative design, testing and refining data-driven UX/UI solutions.",
        "Cross-functional collaboration with UX, marketing, and technology to implement experimentation-based solutions."
      ]
    },
    {
      title: "Product Designer",
      meta: "Power Kitchen (Toronto, Canada) | Apr/2023 - May/2024",
      points: [
        "UX/UI & Interaction Design: Creation of wireframes and interactive prototypes to validate user journeys.",
        "Front-End Development: Building conversion-optimized landing pages using HTML, CSS, and JavaScript.",
        "A/B Test Management: Implementation and continuous analysis of conversion metrics (CTR, time on page, bounce rate).",
        "E-commerce Innovation: Consulting for online stores, proposing improvements based on data insights.",
        "Multidisciplinary Collaboration: Working with marketing, product, and IT teams to implement new features."
      ]
    },
     {
        title: "Designer",
        meta: "Grupo Armação | Sep/2021 - Mar/2023",
        points: [
            "UX/UI for hotel websites, implementing new features, redesigning layouts, and optimizing navigation.",
            "Managed visual identity for digital platforms, including social media, email marketing, and paid ads.",
            "Supervised a team, coordinating a designer in creating digital materials and ensuring brand book adherence.",
            "Analyzed metrics, producing bi-weekly reports via Google Analytics and Data Studio."
        ]
    },
    {
        title: "Designer",
        meta: "Agência Premier | Aug/2020 - Aug/2021",
        points: [
            "Created visual identities and guidelines for brands across various segments.",
            "Developed websites aligned with brand visual identity, prioritizing usability and conversion.",
            "Conceived and executed advertising campaigns for social media and digital ads."
        ]
    },
    {
        title: "Freelance Designer",
        meta: "Gold Coast, Australia | Aug/2017 - Dec/2019",
        points: [
            "Created branding and visual identity for diverse businesses, including gyms, schools, and startups.",
            "Managed digital campaigns, including design for social media, websites, and print materials.",
            "Educational project: developed the visual identity and website for a course teaching soft skills through gamification."
        ]
    },
    {
        title: "Designer",
        meta: "Fremantle | Aug/2016 - Aug/2017",
        points: [
            "Designed for reality shows, including X-Factor Brazil and Hell's Kitchen.",
            "Created visual identity for TV programs and promotional materials.",
            "Edited and produced videos, aligning storytelling with visual impact."
        ]
    },
    {
        title: "Web Designer",
        meta: "Natue | Mar/2015 - Mar/2016",
        points: [
            "Developed landing pages and promotional materials for digital marketing campaigns.",
            "Created email marketing from design to HTML implementation.",
            "Designed banners and social media assets, ensuring alignment with brand's visual identity."
        ]
    },
    {
        title: "Web Designer",
        meta: "Livraria Cultura | May/2010 - May/2014",
        points: [
            "Developed promotional landing pages, including layout and implementation with HTML and CSS.",
            "Handled the layout and design of an online magazine and website banners."
        ]
    }
  ],
  education: [
    { title: "Post-Graduation in Digital Artifacts Design", school: "Cesar School, 2022-2023" },
    { title: "Design Management", school: "Mindroom Innovation, 2018-2020" },
    { title: "Advertising and Propaganda", school: "FMU, 2010-2014" }
  ],
  skills: [
    "User Experience", "Wireframing & Prototyping", "Information Architecture", "Interaction Design", "Design Thinking & User Research", "Discovery & A/B Testing", "Data Analysis"
  ],
  tools: [
    "Figma, Adobe XD, Photoshop, Illustrator", "Google Analytics, Hotjar, Data Studio", "HTML, CSS, JavaScript"
  ]
};

export default function Experiencia() {
  const { locale, t } = useLanguage(); // 2. Use o hook
  const content = locale === 'en' ? content_en : content_pt;

  return (
    <Layout title={t.navExperience}>
      <motion.div
        className={styles.pageContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.grid}>
          <aside className={styles.sidebar}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{content.educationTitle}</h2>
              {content.education.map(item => (
                <div key={item.title} className={styles.educationItem}>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                </div>
              ))}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{content.skillsTitle}</h2>
              <ul className={styles.skillsList}>
                {content.skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </section>

             <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{content.toolsTitle}</h2>
              <ul className={styles.skillsList}>
                {content.tools.map(tool => <li key={tool}>{tool}</li>)}
              </ul>
            </section>
          </aside>

          <main className={styles.mainContent}>
            <section className={styles.section}>
              <h1 className={styles.mainTitle}>{content.title}</h1>
              
              {content.jobs.map(job => (
                <article key={job.title + job.meta} className={styles.jobItem}>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.jobMeta}>{job.meta}</p>
                  <ul>
                    {job.points.map(point => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              ))}

            </section>
          </main>
        </div>
      </motion.div>
    </Layout>
  );
}

// 3. getStaticProps foi removido!