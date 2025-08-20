// Em: pages/sobre-mim.tsx

import Layout from '../components/common/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/pages/SobreMim.module.css';

export default function SobreMim() {
  return (
    <Layout title="Sobre Mim">
      <motion.div
        className={styles.pageContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h1>
              Meu Nome é Melko Serak Neto e trabalho com soluções usando o design.
            </h1>
            <p>
              Me formei em Publicidade e Propaganda pela FMU - Faculdades Metropolitanas Unidas de São Paulo e ao longo da minha trajetória, tive a oportunidade de acompanhar de perto a evolução tecnológica e o impacto que o design teve na jornada do consumidor.
            </p>
            <p>
              Durante minha vivência internacional de 3 anos na Austrália, pude me especializar em Estrutura de Projetos em Design pela Mindroom Innovation. Atualmente, estou me aprofundando em comportamento do usuário e design de interface na Cesar School para aprimorar ainda mais meus conhecimentos.
            </p>
            <p>
              Meu principal objetivo é descobrir insights baseados em dados e utilizar o design como uma ferramenta para gerar um impacto positivo nos negócios. Trabalho sempre em equipe, acreditando que a diversidade e a colaboração são fundamentais para criar soluções eficazes para os usuários.
            </p>
            <a 
              href="/images/melko-curriculo.pdf" 
              className="button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Veja meu currículo
            </a>
          </div>

          <div className={styles.imageContainer}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Image
                src="/images/minha-foto.png"
                alt="Foto de Melko Serak Neto"
                width={300}
                height={300}
                className={styles.profileImage}
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}