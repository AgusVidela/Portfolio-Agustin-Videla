/* eslint-disable react/no-unescaped-entities */
import CardCont from "../components/CardCont";
import CardJr from "../components/CardJr";
import { GraduationCap, BicepsFlexed } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import WorkCard from "../components/WorkCard";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about" id="about" >
        <p data-cursor="text" className="section_text_p text-center dark:-text--light-white">{t('about.getToKnow')}</p>
        <h1 data-cursor="text" className="title dark:-text--font-light">{t('about.aboutMe')}</h1>
        <div className="about_container">
                  <div className="text_content text_p_About">
            <p data-cursor="text" className="dark:text-light-white p-about" dangerouslySetInnerHTML={{ __html: t('about.textContent') }}></p>
          </div>
          <div className="card-junior">
            <CardJr />
          </div>
          <div className="section_container">
            <CardCont
              title={t('about.education.title')}
              description={t('about.education.description')}
              details={t('about.education.details')}
              Icon={GraduationCap}
            />
            <CardCont
              title={t('about.experience.title')}
              description={t('about.experience.description')}
              details={t('about.experience.details')}
              Icon={BicepsFlexed}
            />
          </div>
            <div className="work-contain">
              <div className="details_container_work">
                    <div className="section_pic_cont">
                    <BicepsFlexed className='icono' />
                    </div>
              <WorkCard 
                Company={"Ataway Buenos Aires"}
                Work={"Consultor Técnico Oracle Cloud"}
                Years={"Mayo 2025 - Actualidad"}
              />
              <WorkCard 
                Company={"Ataway Buenos Aires"}
                Work={"Consultor Técnico de TI — PeopleSoft"}
                Years={"Sept 2024 - Mayo 2025"}
              />
              <WorkCard 
                Company={"Fundacion Pescar"}
                Work={"IT Trainee (Programa de 6 meses con beca)"}
                Years={"Jul 2023 - Dic 2023"}
              />
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default About;