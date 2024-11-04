import { HousePlug, Unplug } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";

export const navItems = [
  { label: "Serviços", href: "#services" },
  { label: "Certificados", href: "#certifications" },
  { label: "Sobre nós", href: "#about-us" },
];

export const casesCompany = [
  {
    user: "Diretor Administrativo",
    company: "Academia Corpo e Alma",
    image: user1,
    text: "A equipe foi fundamental para a manutenção elétrica de nossas instalações, garantindo que todos os sistemas funcionassem de forma segura e eficiente. Eles cuidaram de cada detalhe, especialmente dos aquecedores elétricos das áreas de banho e relaxamento, que agora operam com maior confiabilidade. A expertise deles nos deu tranquilidade para oferecer um ambiente sempre confortável e seguro aos nossos alunos, mesmo nos dias mais frios. Recomendamos o trabalho profissional e comprometido dessa empresa para qualquer necessidade elétrica!",
  },
  {
    user: "Coordenador",
    company: "Única",
    image: user2,
    text: "A Elétrica Diamond nos prestou serviços excepcionais na Única. Desde a manutenção de nossos sistemas elétricos até a instalação de novos aquecedores elétricos, a equipe mostrou profissionalismo e expertise. O trabalho foi realizado com precisão, garantindo segurança e eficiência em nossas instalações. A melhoria na infraestrutura elétrica teve um impacto direto na qualidade dos serviços que oferecemos. Recomendamos a Elétrica Diamond a qualquer empresa que busque soluções elétricas confiáveis e de alta qualidade!",
  },
  {
    user: "Administração",
    company: "Delta Lift",
    image: user3,
    text: "Recebemos serviços da Elétrica Diamond e ficamos impressionados com a qualidade e o profissionalismo da equipe. Eles realizaram uma análise minuciosa de nossas instalações elétricas e a instalação de sistemas novos para os elevadores. A atenção aos detalhes melhorou significativamente a segurança e eficiência. Recomendamos a Elétrica Diamond a qualquer empresa que busque soluções elétricas de alta qualidade!",
  },
];

export const features = [
  {
    icon: <HousePlug />,
    text: "Instalação e manutenção elétrica residencial",
    description:
      "Realizamos serviços completos de instalação e manutenção elétrica para sua residência. Nossa equipe é qualificada para lidar com todos os tipos de demandas, desde a instalação de sistemas elétricos e de câmeras de segurança até reparos e atualizações de instalações antigas. Garantimos segurança e eficiência em cada projeto, proporcionando tranquilidade e confiabilidade para o seu lar.",
  },
  {
    icon: <Unplug />,
    text: "Soluções elétricas comerciais",
    description:
      "Oferecemos uma ampla gama de serviços elétricos para necessidades variadas, seja em ambientes comerciais ou residenciais. Nossos especialistas estão prontos para realizar desde a análise e ensaios de sistemas elétricos até o desenvolvimento de projetos personalizados. Com foco em inovação e qualidade, nosso objetivo é garantir que cada instalação ou reparo atenda aos mais altos padrões de segurança e desempenho.",
  },
];

export const checklistItems = [
  {
    title: "NR 10",
    description:
      "Segurança em trabalhos elétricos.",
  },
  {
    title: "NR 35",
    description:
      "Segurança em trabalhos em altura.",
  },
  {
    title: "NR 35",
    description:
      "Segurança em trabalhos em altura.",
  },
  {
    title: "Eletricista instalador",
  },
  {
    title: "Técnico eletrotécnico",
  },
  {
    title: "Instalação de carregadores automotivos",
  },
];

export const contactLinks = [
  { href: "https://www.google.com/maps/place/Rua+Vict%C3%B3rio+Santim,+2776+-+Vila+Carmosina,+S%C3%A3o+Paulo+-+SP,+08290-001/@-23.5584036,-46.4496507,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce66886fb92d3b:0x361c0c44b15c3679!8m2!3d-23.5584036!4d-46.4496507!16s%2Fg%2F11cp9t79v2?entry=ttu", text: ("Rua Victório Santim, 2776, CEP: 08290-001") },
  { href: "tel:+5511991446540", text: "(11) 99144-6540" },
  { href: "mailto:eletricadiamond@hotmail.com", text: "eletricadiamond@hotmail.com" },
];

export const socialsLinks = [
  { href: "https://www.instagram.com/eletricadiamond/", text: "Instagram" },
  { href: "#11991446540", text: "Whatsapp" },
  { href: "#", text: "E-mail" },
];
