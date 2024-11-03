import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Iluminando o futuro,   
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-700 text-transparent bg-clip-text">
            {" "}garantindo sua segurança.
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-2-4xl">
        Com uma equipe de profissionais altamente qualificados, oferecemos soluções completas para todas as suas necessidades elétricas. Desde instalações residenciais até manutenções industriais, nosso compromisso é com a excelência e a satisfação do cliente. Conte conosco para serviços confiáveis, eficientes e de alta qualidade. Sua tranquilidade é nossa prioridade.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-yellow-300 to-yellow-700 py-3 px-4 mx-3 rounded-md">
                Saiba mais!
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-yellow-800 shadow-yellow-400 mx-2 my-3">
                <source src={video1} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-yellow-800 shadow-yellow-400 mx-2 my-3">
                <source src={video2} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default HeroSection